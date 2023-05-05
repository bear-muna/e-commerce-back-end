const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [Product]
    });
    if (tags.length === 0) {
      return res.status(404).json({ msg: "No tags within the database" })
    }
    res.json(tags);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error occurred", error })
  }

  
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [Product],
    });
    if (!tag) {
      return res.status(404).json({ msg: "No tag with id exists in the database" });
    }
    res.json(tag);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error occurred", error })
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.json(tag);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error occurred", error })
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
      const editTag = await Tag.update({
      tag_name: req.body.tag_name,
    }, {
      where: {
        id: req.params.id,
      }
    });
    if (!editTag[0]) {
      return res.status(404).json({ msg: "No tag with id exists in database" })
    }
    res.json(editTag);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error occurred", error })
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
