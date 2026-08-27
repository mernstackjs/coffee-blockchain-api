export const validateTransaction = (req, res, next) => {
  const { sender, recipient, batchId, weightKg } = req.body;

  if (!sender || !recipient || !batchId || !weightKg) {
    return res.status(400).json({
      message: 'Missing transaction data',
    });
  }

  next();
};
