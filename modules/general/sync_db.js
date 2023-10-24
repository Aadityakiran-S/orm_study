const db = require('../../models');

const sync_db = async (req, res) => {
    try {
        await db.sequelize.sync();
        return res.status(201).json({ success: true });
    }
    catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}

module.exports = { sync_db }
