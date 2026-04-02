let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob',   email: 'bob@example.com'   },
];

exports.getAll = (req, res) => {
  res.json({ success: true, data: users });
};

exports.getOne = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  res.json({ success: true, data: user });
};

exports.create = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ success: false, message: 'name and email are required' });

  const user = { id: users.length + 1, name, email };
  users.push(user);
  res.status(201).json({ success: true, data: user });
};

exports.update = (req, res) => {
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ success: false, message: 'User not found' });

  users[idx] = { ...users[idx], ...req.body, id: users[idx].id };
  res.json({ success: true, data: users[idx] });
};

exports.remove = (req, res) => {
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ success: false, message: 'User not found' });

  users.splice(idx, 1);
  res.json({ success: true, message: 'User deleted' });
};
