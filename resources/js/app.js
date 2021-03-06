require('./bootstrap');

import ClassSwither from './class-switcher.js';
import InputLavel from './input-lavel.js';
import ToggleClass from './toggle-class.js';
import ExtrasAsync from './extras-async';
import OpenModal from './open-modal';

new ClassSwither('radio_button_active', 'radio_button_el', 'step_item_forms', 'step_content');
new ClassSwither('radio_round_active', 'radio_round_el', 'step_item_forms', 'step_content');

new InputLavel('step_content');
new ToggleClass('checkbox_active', 'checkbox_el', 'step_content');
new ToggleClass('input_icon_active', 'input_icon_el', 'step_content');
new ExtrasAsync('step_item_forms');
new OpenModal('checkout_modal', 'wrapper', 'reserve_button', 'display-flex')
