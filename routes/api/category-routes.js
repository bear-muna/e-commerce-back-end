const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [Product]
    });
    if (categories.length === 0) {
      return res.status(404).json({ msg: "There are no categories in the database" })
    }
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error occurred", error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryID = await Category.findByPk(req.params.id, {
      include: [Product]
    });
    if (!categoryID) {
      return res.status(404).json({ msg: "There is no category with id" })
    }
    res.json(categoryID);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error occurred", error });
  }
});

router.post('/', async (req, res) => {
  try {
    const createCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.json(createCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error occurred", error });
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
