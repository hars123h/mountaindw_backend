const express = require('express');

const { place_recharge, register, login, forgotPassword, 
        purchase, reset_login_password, bank_details, feedback,
        update_recharge, place_withdrawal, update_withdrawal, get_all_recharges, 
        get_user_count, get_all_withdrawals, get_all_users, update_earning,
        dashboard_data, amount_setup, add_controller, get_controllers,
        get_amounts, update_amounts, delete_controller, admin_login, update_plan_state,
        get_all_controllers, get_all_feedbacks, get_blocked_users, add_blocked_users,
        get_user, get_user_recharges, get_user_withdrawals, get_paginated_user,
        update_balance, search_users, get_promo_amount, invite_rewards, lvl1, lvl2, lvl3,
        withdrawalSum, related_recharges
} = require('../controllers/auth');

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot_password", forgotPassword);
router.post("/purchase", purchase);
router.post('/reset_login_password', reset_login_password);
router.post('/bank_details', bank_details);
router.post('/place_recharge', related_recharges, place_recharge);
router.post('/feedback', feedback)
router.post('/update_recharge_status', update_recharge);
router.post('/place_withdrawal', place_withdrawal);
router.post('/update_withdrawal_status', update_withdrawal);
router.post('/update_earning', update_earning);
router.post('/amount_setup', amount_setup);
router.post('/add_controller', add_controller);
router.get('/controllers', get_controllers);
router.get('/amounts', get_amounts);
router.post('/update_amounts', update_amounts)
router.get('/get_all_recharges', get_all_recharges);
router.get('/get_all_withdrawals', get_all_withdrawals);
router.get('/get_user_count', get_user_count);
router.get('/get_all_users', get_all_users);
router.get('/dashboard_data_sum', dashboard_data);
router.post('/delete_controller', delete_controller);
router.post('/admin_login', admin_login);
router.post('/update_plan_state', update_plan_state);
router.get('/get_all_controllers', get_all_controllers);
router.get('/get_all_feedbacks', get_all_feedbacks)
router.get('/get_blocked_users', get_blocked_users);
router.post('/add_blocked_users', add_blocked_users);
router.post('/get_user', get_user);
router.post('/get_user_recharges', get_user_recharges);
router.post('/get_user_withdrawals', get_user_withdrawals);
router.post('/get_paginated_user',  get_paginated_user);
router.post("/update_balance", update_balance);
router.post('/search_users', search_users);
router.post('/avail_promo', get_promo_amount);
router.post('/invite_rewards', invite_rewards);
router.post('/lvl1', lvl1);
router.post('/lvl2', lvl2);
router.post('/lvl3', lvl3);
router.post('/withdrawalSum', withdrawalSum);

module.exports = router;