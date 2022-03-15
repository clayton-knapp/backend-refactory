const { Router } = require('express');
const Order = require('../models/Order');
// const pool = require('../utils/pool');

module.exports = Router()

//insert
  .post('/', async (req, res) => {
    // const { rows } = await pool.query(
    //   'INSERT INTO orders(product, quantity) VALUES ($1, $2) RETURNING *;',
    //   [req.body.product, req.body.quantity]
    // );
    // const order = new Order(rows[0]);

    const order = await Order.insert({ product: req.params.product, quantity: req.params.quantity });

    res.json(order);
  })

//getByID
  .get('/:id', async (req, res) => {
    // const { rows } = await pool.query('SELECT * FROM orders WHERE id=$1;', [
    //   req.params.id,
    // ]);

    // if (!rows[0]) return null;
    // const order = new Order(rows[0]);

    const order = await Order.getById(req.params.id);

    res.json(order);
  })

  // getAll
  .get('/', async (req, res) => {
    // const { rows } = await pool.query('SELECT * FROM orders;');
    // const orders = rows.map((row) => new Order(row));

    const orders = await Order.getAll();

    res.json(orders);
  })

//updateByID
  .patch('/:id', async (req, res, next) => {
    try {
      // const { id } = req.params;
      // const result = await pool.query(
      //   `
      //   SELECT * FROM orders WHERE id=$1;
      //   `,
      //   [id]
      // );
      // const existingOrder = result.rows[0];

      // if (!existingOrder) {
      //   const error = new Error(`Order ${id} not found`);
      //   error.status = 404;
      //   throw error;
      // }

      // const product = req.body.product ?? existingOrder.product;
      // const quantity = req.body.quantity ?? existingOrder.quantity;
      // const { rows } = await pool.query(
      //   'UPDATE orders SET product=$2, quantity=$3 WHERE id=$1 RETURNING *;',
      //   [id, product, quantity]
      // );
      // const order = new Order(rows[0]);

      // const object = { product: req.params.product, quantity: req.params.quantity };

      const order = await Order.updateById(req.params.id, { product: req.params.product, quantity: req.params.quantity });

      res.json(order);

    } catch (error) {
      next(error);
    }
  })

//deleteByID
  .delete('/:id', async (req, res) => {
    // const { rows } = await pool.query(
    //   'DELETE FROM orders WHERE id=$1 RETURNING *;',
    //   [req.params.id]
    // );

    // if (!rows[0]) return null;
    // const order = new Order(rows[0]);

    const order = await Order.deleteById(req.params.id);

    res.json(order);
  });
