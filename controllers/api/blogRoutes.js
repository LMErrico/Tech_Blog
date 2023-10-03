const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  console.log(`Received PUT request for ID: ${req.params.id}`);
  try {
    const updatedRows = await Blog.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    console.log('Number of updated rows:', updatedRows[0]);

    if (updatedRows[0] === 0) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    // Query the updated data and return it in the response
    const updatedBlog = await Blog.findByPk(req.params.id);

    res.status(200).json(updatedBlog);
  } catch (err) {
    
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
