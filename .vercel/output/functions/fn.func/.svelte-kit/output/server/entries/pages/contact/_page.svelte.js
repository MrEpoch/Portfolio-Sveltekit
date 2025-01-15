import {
	P as setContext,
	a3 as hasContext,
	a0 as getContext,
	Z as store_get,
	W as slot,
	_ as unsubscribe_stores,
	X as bind_props,
	Q as pop,
	O as push,
	S as fallback,
	a4 as rest_props,
	a5 as spread_attributes,
	a2 as ensure_array_like,
	a1 as escape_html,
	a6 as sanitize_props,
	a7 as element,
	a8 as spread_props,
	a9 as invalid_default_snippet,
	V as clsx$1,
	T as attr,
	aa as copy_payload,
	ab as assign_payload,
	$ as head,
	ac as store_mutate
} from '../../../chunks/index3.js';
import { clsx } from 'clsx';
import { nanoid } from 'nanoid/non-secure';
import { w as writable, d as derived, g as get, r as readable } from '../../../chunks/index2.js';
import 'dequal';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { s as superForm, z as zodClient, f as formSchema } from '../../../chunks/zod.js';
import '../../../chunks/client.js';
import 'ts-deepmerge';
import '../../../chunks/index.js';
import 'memoize-weak';
import '../../../chunks/store.js';
const FORM_FIELD = Symbol('FORM_FIELD_CTX');
function setFormField(props) {
	setContext(FORM_FIELD, props);
	return props;
}
function getFormField() {
	if (!hasContext(FORM_FIELD)) {
		ctxError('Form.Field');
	}
	return getContext(FORM_FIELD);
}
const FORM_CONTROL = Symbol('FORM_CONTROL_CTX');
function setFormControl(props) {
	setContext(FORM_CONTROL, props);
	return props;
}
function getFormControl() {
	if (!hasContext(FORM_CONTROL)) {
		ctxError('<Control />');
	}
	return getContext(FORM_CONTROL);
}
function ctxError(ctx) {
	throw new Error(
		`Unable to find \`${ctx}\` context. Did you forget to wrap the component in a \`${ctx}\`?`
	);
}
function getAriaDescribedBy({ fieldErrorsId = void 0, descriptionId = void 0, errors }) {
	let describedBy = '';
	if (descriptionId) {
		describedBy += descriptionId + ' ';
	}
	if (errors.length && fieldErrorsId) {
		describedBy += fieldErrorsId;
	}
	return describedBy ? describedBy.trim() : void 0;
}
function getAriaRequired(constraints) {
	if (!('required' in constraints)) return void 0;
	return constraints.required ? 'true' : void 0;
}
function getAriaInvalid(errors) {
	return errors && errors.length ? 'true' : void 0;
}
function getDataFsError(errors) {
	return errors && errors.length ? '' : void 0;
}
function generateId() {
	return nanoid(5);
}
function extractErrorArray(errors) {
	if (Array.isArray(errors)) return errors;
	if (typeof errors === 'object' && '_errors' in errors) {
		if (errors._errors !== void 0) return errors._errors;
	}
	return [];
}
function getValueAtPath(path, obj) {
	const keys = path.split(/[[\].]/).filter(Boolean);
	let value = obj;
	for (const key of keys) {
		if (typeof value !== 'object' || value === null) {
			return void 0;
		}
		value = value[key];
	}
	return value;
}
function Field($$payload, $$props) {
	push();
	var $$store_subs;
	let formErrors, formConstraints, formTainted, formData;
	let form = $$props['form'];
	let name = $$props['name'];
	const field = {
		name: writable(name),
		errors: writable([]),
		constraints: writable({}),
		tainted: writable(false),
		fieldErrorsId: writable(),
		descriptionId: writable(),
		form
	};
	const { tainted, errors } = field;
	setFormField(field);
	({
		errors: formErrors,
		constraints: formConstraints,
		tainted: formTainted,
		form: formData
	} = form);
	field.name.set(name);
	field.errors.set(
		extractErrorArray(
			getValueAtPath(name, store_get(($$store_subs ??= {}), '$formErrors', formErrors))
		)
	);
	field.constraints.set(
		getValueAtPath(name, store_get(($$store_subs ??= {}), '$formConstraints', formConstraints)) ??
			{}
	);
	field.tainted.set(
		store_get(($$store_subs ??= {}), '$formTainted', formTainted)
			? getValueAtPath(name, store_get(($$store_subs ??= {}), '$formTainted', formTainted)) === true
			: false
	);
	$$payload.out += `<!---->`;
	slot(
		$$payload,
		$$props,
		'default',
		{
			value: store_get(($$store_subs ??= {}), '$formData', formData)[name],
			errors: store_get(($$store_subs ??= {}), '$errors', errors),
			tainted: store_get(($$store_subs ??= {}), '$tainted', tainted),
			constraints: store_get(($$store_subs ??= {}), '$formConstraints', formConstraints)[name]
		},
		null
	);
	$$payload.out += `<!---->`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	bind_props($$props, { form, name });
	pop();
}
function Control$1($$payload, $$props) {
	push();
	var $$store_subs;
	let errorAttr, attrs, labelAttrs;
	let id = fallback($$props['id'], generateId, true);
	const { name, fieldErrorsId, descriptionId, errors, constraints } = getFormField();
	const controlContext = {
		id: writable(id),
		attrs: writable(),
		labelAttrs: writable()
	};
	const { id: idStore } = controlContext;
	setFormControl(controlContext);
	controlContext.id.set(id);
	errorAttr = getDataFsError(store_get(($$store_subs ??= {}), '$errors', errors));
	attrs = {
		name: store_get(($$store_subs ??= {}), '$name', name),
		id: store_get(($$store_subs ??= {}), '$idStore', idStore),
		'data-fs-error': errorAttr,
		'aria-describedby': getAriaDescribedBy({
			fieldErrorsId: store_get(($$store_subs ??= {}), '$fieldErrorsId', fieldErrorsId),
			descriptionId: store_get(($$store_subs ??= {}), '$descriptionId', descriptionId),
			errors: store_get(($$store_subs ??= {}), '$errors', errors)
		}),
		'aria-invalid': getAriaInvalid(store_get(($$store_subs ??= {}), '$errors', errors)),
		'aria-required': getAriaRequired(store_get(($$store_subs ??= {}), '$constraints', constraints)),
		'data-fs-control': ''
	};
	labelAttrs = {
		for: store_get(($$store_subs ??= {}), '$idStore', idStore),
		'data-fs-label': '',
		'data-fs-error': errorAttr
	};
	controlContext.attrs.set(attrs);
	controlContext.labelAttrs.set(labelAttrs);
	$$payload.out += `<!---->`;
	slot($$payload, $$props, 'default', { attrs }, null);
	$$payload.out += `<!---->`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	bind_props($$props, { id });
	pop();
}
function Field_errors($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['id', 'asChild', 'el']);
	push();
	var $$store_subs;
	let errorAttr, fieldErrorsAttrs, errorAttrs;
	const { fieldErrorsId, errors } = getFormField();
	let id = fallback($$props['id'], generateId, true);
	let asChild = fallback($$props['asChild'], false);
	let el = fallback($$props['el'], () => void 0, true);
	errorAttr = getDataFsError(store_get(($$store_subs ??= {}), '$errors', errors));
	fieldErrorsId.set(id);
	fieldErrorsAttrs = {
		id: store_get(($$store_subs ??= {}), '$fieldErrorsId', fieldErrorsId),
		'data-fs-error': errorAttr,
		'data-fs-field-errors': '',
		'aria-live': 'assertive',
		...$$restProps
	};
	errorAttrs = {
		'data-fs-field-error': '',
		'data-fs-error': errorAttr
	};
	if (asChild) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<!---->`;
		slot(
			$$payload,
			$$props,
			'default',
			{
				errors: store_get(($$store_subs ??= {}), '$errors', errors),
				fieldErrorsAttrs,
				errorAttrs
			},
			null
		);
		$$payload.out += `<!---->`;
	} else {
		$$payload.out += '<!--[!-->';
		$$payload.out += `<div${spread_attributes({ ...fieldErrorsAttrs })}><!---->`;
		slot(
			$$payload,
			$$props,
			'default',
			{
				errors: store_get(($$store_subs ??= {}), '$errors', errors),
				fieldErrorsAttrs,
				errorAttrs
			},
			() => {
				const each_array = ensure_array_like(store_get(($$store_subs ??= {}), '$errors', errors));
				$$payload.out += `<!--[-->`;
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let error = each_array[$$index];
					$$payload.out += `<div${spread_attributes({ ...errorAttrs })}>${escape_html(error)}</div>`;
				}
				$$payload.out += `<!--]-->`;
			}
		);
		$$payload.out += `<!----></div>`;
	}
	$$payload.out += `<!--]-->`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	bind_props($$props, { id, asChild, el });
	pop();
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function styleToString(style) {
	return Object.keys(style).reduce((str, key) => {
		if (style[key] === void 0) return str;
		return str + `${key}:${style[key]};`;
	}, '');
}
function disabledAttr(disabled) {
	return disabled ? true : void 0;
}
({
	type: 'hidden',
	'aria-hidden': true,
	hidden: true,
	tabIndex: -1,
	style: styleToString({
		position: 'absolute',
		opacity: 0,
		'pointer-events': 'none',
		margin: 0,
		transform: 'translateX(-100%)'
	})
});
function lightable(value) {
	function subscribe(run) {
		run(value);
		return () => {};
	}
	return { subscribe };
}
const hiddenAction = (obj) => {
	return new Proxy(obj, {
		get(target, prop, receiver) {
			return Reflect.get(target, prop, receiver);
		},
		ownKeys(target) {
			return Reflect.ownKeys(target).filter((key) => key !== 'action');
		}
	});
};
const isFunctionWithParams = (fn) => {
	return typeof fn === 'function';
};
makeElement('empty');
function makeElement(name, args) {
	const { stores, action, returned } = args ?? {};
	const derivedStore = (() => {
		if (stores && returned) {
			return derived(stores, (values) => {
				const result = returned(values);
				if (isFunctionWithParams(result)) {
					const fn = (...args2) => {
						return hiddenAction({
							...result(...args2),
							[`data-melt-${name}`]: '',
							action: action ?? noop
						});
					};
					fn.action = action ?? noop;
					return fn;
				}
				return hiddenAction({
					...result,
					[`data-melt-${name}`]: '',
					action: action ?? noop
				});
			});
		} else {
			const returnedFn = returned;
			const result = returnedFn?.();
			if (isFunctionWithParams(result)) {
				const resultFn = (...args2) => {
					return hiddenAction({
						...result(...args2),
						[`data-melt-${name}`]: '',
						action: action ?? noop
					});
				};
				resultFn.action = action ?? noop;
				return lightable(resultFn);
			}
			return lightable(
				hiddenAction({
					...result,
					[`data-melt-${name}`]: '',
					action: action ?? noop
				})
			);
		}
	})();
	const actionFn = action ?? (() => {});
	actionFn.subscribe = derivedStore.subscribe;
	return actionFn;
}
function isHTMLElement(element2) {
	return element2 instanceof HTMLElement;
}
function executeCallbacks(...callbacks) {
	return (...args) => {
		for (const callback of callbacks) {
			if (typeof callback === 'function') {
				callback(...args);
			}
		}
	};
}
function noop() {}
function addEventListener(target, event, handler, options) {
	const events = Array.isArray(event) ? event : [event];
	events.forEach((_event) => target.addEventListener(_event, handler, options));
	return () => {
		events.forEach((_event) => target.removeEventListener(_event, handler, options));
	};
}
function addMeltEventListener(target, event, handler, options) {
	const events = Array.isArray(event) ? event : [event];
	if (typeof handler === 'function') {
		const handlerWithMelt = withMelt((_event) => handler(_event));
		events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
		return () => {
			events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
		};
	}
	return () => noop();
}
function dispatchMeltEvent(originalEvent) {
	const node = originalEvent.currentTarget;
	if (!isHTMLElement(node)) return null;
	const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
		detail: {
			originalEvent
		},
		cancelable: true
	});
	node.dispatchEvent(customMeltEvent);
	return customMeltEvent;
}
function withMelt(handler) {
	return (event) => {
		const customEvent = dispatchMeltEvent(event);
		if (customEvent?.defaultPrevented) return;
		return handler(event);
	};
}
function omit(obj, ...keys) {
	const result = {};
	for (const key of Object.keys(obj)) {
		if (!keys.includes(key)) {
			result[key] = obj[key];
		}
	}
	return result;
}
function withGet(store) {
	return {
		...store,
		get: () => get(store)
	};
}
withGet.writable = function (initial) {
	const internal = writable(initial);
	let value = initial;
	return {
		subscribe: internal.subscribe,
		set(newValue) {
			internal.set(newValue);
			value = newValue;
		},
		update(updater) {
			const newValue = updater(value);
			internal.set(newValue);
			value = newValue;
		},
		get() {
			return value;
		}
	};
};
withGet.derived = function (stores, fn) {
	const subscribers = /* @__PURE__ */ new Map();
	const get2 = () => {
		const values = Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get();
		return fn(values);
	};
	const subscribe = (subscriber) => {
		const unsubscribers = [];
		const storesArr = Array.isArray(stores) ? stores : [stores];
		storesArr.forEach((store) => {
			unsubscribers.push(
				store.subscribe(() => {
					subscriber(get2());
				})
			);
		});
		subscriber(get2());
		subscribers.set(subscriber, unsubscribers);
		return () => {
			const unsubscribers2 = subscribers.get(subscriber);
			if (unsubscribers2) {
				for (const unsubscribe of unsubscribers2) {
					unsubscribe();
				}
			}
			subscribers.delete(subscriber);
		};
	};
	return {
		get: get2,
		subscribe
	};
};
const overridable = (_store, onChange) => {
	const store = withGet(_store);
	const update = (updater, sideEffect) => {
		store.update((curr) => {
			const next = updater(curr);
			let res = next;
			if (onChange) {
				res = onChange({ curr, next });
			}
			sideEffect?.(res);
			return res;
		});
	};
	const set = (curr) => {
		update(() => curr);
	};
	return {
		...store,
		update,
		set
	};
};
const kbd = {
	ALT: 'Alt',
	ARROW_DOWN: 'ArrowDown',
	ARROW_LEFT: 'ArrowLeft',
	ARROW_RIGHT: 'ArrowRight',
	ARROW_UP: 'ArrowUp',
	BACKSPACE: 'Backspace',
	CAPS_LOCK: 'CapsLock',
	CONTROL: 'Control',
	DELETE: 'Delete',
	END: 'End',
	ENTER: 'Enter',
	ESCAPE: 'Escape',
	F1: 'F1',
	F10: 'F10',
	F11: 'F11',
	F12: 'F12',
	F2: 'F2',
	F3: 'F3',
	F4: 'F4',
	F5: 'F5',
	F6: 'F6',
	F7: 'F7',
	F8: 'F8',
	F9: 'F9',
	HOME: 'Home',
	META: 'Meta',
	PAGE_DOWN: 'PageDown',
	PAGE_UP: 'PageUp',
	SHIFT: 'Shift',
	SPACE: ' ',
	TAB: 'Tab',
	CTRL: 'Control',
	ASTERISK: '*',
	A: 'a',
	P: 'p'
};
function toWritableStores(properties) {
	const result = {};
	Object.keys(properties).forEach((key) => {
		const propertyKey = key;
		const value = properties[propertyKey];
		result[propertyKey] = withGet(writable(value));
	});
	return result;
}
const defaults$1 = {
	disabled: false,
	required: false,
	name: void 0,
	value: 'on',
	defaultChecked: false
};
function createCheckbox(props) {
	const withDefaults = { ...defaults$1, ...props };
	const options = toWritableStores(omit(withDefaults, 'checked', 'defaultChecked'));
	const { disabled, name, required, value } = options;
	const checkedWritable = withDefaults.checked ?? writable(withDefaults.defaultChecked);
	const checked = overridable(checkedWritable, withDefaults?.onCheckedChange);
	const root = makeElement('checkbox', {
		stores: [checked, disabled, required],
		returned: ([$checked, $disabled, $required]) => {
			return {
				'data-disabled': disabledAttr($disabled),
				disabled: disabledAttr($disabled),
				'data-state':
					$checked === 'indeterminate' ? 'indeterminate' : $checked ? 'checked' : 'unchecked',
				type: 'button',
				role: 'checkbox',
				'aria-checked': $checked === 'indeterminate' ? 'mixed' : $checked,
				'aria-required': $required
			};
		},
		action: (node) => {
			const unsub = executeCallbacks(
				addMeltEventListener(node, 'keydown', (e) => {
					if (e.key === kbd.ENTER) e.preventDefault();
				}),
				addMeltEventListener(node, 'click', () => {
					if (disabled.get()) return;
					checked.update((value2) => {
						if (value2 === 'indeterminate') return true;
						return !value2;
					});
				})
			);
			return {
				destroy: unsub
			};
		}
	});
	const input = makeElement('checkbox-input', {
		stores: [checked, name, value, required, disabled],
		returned: ([$checked, $name, $value, $required, $disabled]) => {
			return {
				type: 'checkbox',
				'aria-hidden': true,
				hidden: true,
				tabindex: -1,
				name: $name,
				value: $value,
				checked: $checked === 'indeterminate' ? false : $checked,
				required: $required,
				disabled: disabledAttr($disabled),
				style: styleToString({
					position: 'absolute',
					opacity: 0,
					'pointer-events': 'none',
					margin: 0,
					transform: 'translateX(-100%)'
				})
			};
		}
	});
	const isIndeterminate = derived(checked, ($checked) => $checked === 'indeterminate');
	const isChecked = derived(checked, ($checked) => $checked === true);
	return {
		elements: {
			root,
			input
		},
		states: {
			checked
		},
		helpers: {
			isIndeterminate,
			isChecked
		},
		options
	};
}
readable(void 0, (set) => {
	function clicked(event) {
		set(event);
		set(void 0);
	}
	const unsubscribe = addEventListener(document, 'pointerup', clicked, {
		passive: false,
		capture: true
	});
	return unsubscribe;
});
readable(void 0, (set) => {
	function keydown(event) {
		if (event && event.key === kbd.ESCAPE) {
			set(event);
		}
		set(void 0);
	}
	const unsubscribe = addEventListener(document, 'keydown', keydown, {
		passive: false
	});
	return unsubscribe;
});
({
	prefix: '',
	disabled: readable(false),
	required: readable(false),
	name: readable(void 0)
});
function createLabel() {
	const root = makeElement('label', {
		action: (node) => {
			const mouseDown = addMeltEventListener(node, 'mousedown', (e) => {
				if (!e.defaultPrevented && e.detail > 1) {
					e.preventDefault();
				}
			});
			return {
				destroy: mouseDown
			};
		}
	});
	return {
		elements: {
			root
		}
	};
}
const defaults = {
	isDateDisabled: void 0,
	isDateUnavailable: void 0,
	value: void 0,
	preventDeselect: false,
	numberOfMonths: 1,
	pagedNavigation: false,
	weekStartsOn: 0,
	fixedWeeks: false,
	calendarLabel: 'Event Date',
	locale: 'en',
	minValue: void 0,
	maxValue: void 0,
	disabled: false,
	readonly: false,
	weekdayFormat: 'narrow'
};
({
	isDateDisabled: void 0,
	isDateUnavailable: void 0,
	value: void 0,
	positioning: {
		placement: 'bottom'
	},
	closeOnEscape: true,
	closeOnOutsideClick: true,
	onOutsideClick: void 0,
	preventScroll: false,
	forceVisible: false,
	locale: 'en',
	granularity: void 0,
	disabled: false,
	readonly: false,
	minValue: void 0,
	maxValue: void 0,
	weekdayFormat: 'narrow',
	...omit(
		defaults,
		'isDateDisabled',
		'isDateUnavailable',
		'value',
		'locale',
		'disabled',
		'readonly',
		'minValue',
		'maxValue',
		'weekdayFormat'
	)
});
function createBitAttrs(bit, parts) {
	const attrs = {};
	parts.forEach((part) => {
		attrs[part] = {
			[`data-${bit}-${part}`]: ''
		};
	});
	return (part) => attrs[part];
}
function removeUndefined(obj) {
	const result = {};
	for (const key in obj) {
		const value = obj[key];
		if (value !== void 0) {
			result[key] = value;
		}
	}
	return result;
}
function getOptionUpdater(options) {
	return function (key, value) {
		if (value === void 0) return;
		const store = options[key];
		if (store) {
			store.set(value);
		}
	};
}
function getAttrs(builders) {
	const attrs = {};
	builders.forEach((builder) => {
		Object.keys(builder).forEach((key) => {
			if (key !== 'action') {
				attrs[key] = builder[key];
			}
		});
	});
	return attrs;
}
function Button$1($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['href', 'type', 'builders', 'el']);
	push();
	let href = fallback($$props['href'], () => void 0, true);
	let type = fallback($$props['type'], () => void 0, true);
	let builders = fallback($$props['builders'], () => [], true);
	let el = fallback($$props['el'], () => void 0, true);
	const attrs = { 'data-button-root': '' };
	if (builders && builders.length) {
		$$payload.out += '<!--[-->';
		element(
			$$payload,
			href ? 'a' : 'button',
			() => {
				$$payload.out += `${spread_attributes({
					type: href ? void 0 : type,
					href,
					tabindex: '0',
					...getAttrs(builders),
					...$$restProps,
					...attrs
				})}`;
			},
			() => {
				$$payload.out += `<!---->`;
				slot($$payload, $$props, 'default', {}, null);
				$$payload.out += `<!---->`;
			}
		);
	} else {
		$$payload.out += '<!--[!-->';
		element(
			$$payload,
			href ? 'a' : 'button',
			() => {
				$$payload.out += `${spread_attributes({
					type: href ? void 0 : type,
					href,
					tabindex: '0',
					...$$restProps,
					...attrs
				})}`;
			},
			() => {
				$$payload.out += `<!---->`;
				slot($$payload, $$props, 'default', {}, null);
				$$payload.out += `<!---->`;
			}
		);
	}
	$$payload.out += `<!--]-->`;
	bind_props($$props, { href, type, builders, el });
	pop();
}
function getCheckboxData() {
	const NAME = 'checkbox';
	const PARTS = ['root', 'input', 'indicator'];
	return {
		NAME,
		PARTS
	};
}
function setCtx(props) {
	const { NAME, PARTS } = getCheckboxData();
	const getAttrs2 = createBitAttrs(NAME, PARTS);
	const checkbox = { ...createCheckbox(removeUndefined(props)), getAttrs: getAttrs2 };
	setContext(NAME, checkbox);
	return {
		...checkbox,
		updateOption: getOptionUpdater(checkbox.options)
	};
}
function getCtx() {
	const { NAME } = getCheckboxData();
	return getContext(NAME);
}
function Checkbox$1($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, [
		'checked',
		'disabled',
		'name',
		'required',
		'value',
		'onCheckedChange',
		'asChild',
		'el'
	]);
	push();
	var $$store_subs;
	let attrs, builder;
	let checked = fallback($$props['checked'], false);
	let disabled = fallback($$props['disabled'], () => void 0, true);
	let name = fallback($$props['name'], () => void 0, true);
	let required = fallback($$props['required'], () => void 0, true);
	let value = fallback($$props['value'], () => void 0, true);
	let onCheckedChange = fallback($$props['onCheckedChange'], () => void 0, true);
	let asChild = fallback($$props['asChild'], false);
	let el = fallback($$props['el'], () => void 0, true);
	const {
		elements: { root },
		states: { checked: localChecked },
		updateOption,
		getAttrs: getAttrs2
	} = setCtx({
		defaultChecked: checked,
		disabled,
		name,
		required,
		value,
		onCheckedChange: ({ next }) => {
			if (checked !== next) {
				onCheckedChange?.(next);
				checked = next;
			}
			return next;
		}
	});
	attrs = {
		...getAttrs2('root'),
		disabled: disabled ? true : void 0
	};
	checked !== void 0 && localChecked.set(checked);
	updateOption('disabled', disabled);
	updateOption('name', name);
	updateOption('required', required);
	updateOption('value', value);
	builder = store_get(($$store_subs ??= {}), '$root', root);
	Object.assign(builder, attrs);
	if (asChild) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<!---->`;
		slot($$payload, $$props, 'default', { builder }, null);
		$$payload.out += `<!---->`;
	} else {
		$$payload.out += '<!--[!-->';
		$$payload.out += `<button${spread_attributes({ ...builder, type: 'button', ...$$restProps })}><!---->`;
		slot($$payload, $$props, 'default', { builder }, null);
		$$payload.out += `<!----></button>`;
	}
	$$payload.out += `<!--]-->`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	bind_props($$props, {
		checked,
		disabled,
		name,
		required,
		value,
		onCheckedChange,
		asChild,
		el
	});
	pop();
}
function Checkbox_indicator($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['asChild', 'el']);
	push();
	var $$store_subs;
	let attrs;
	let asChild = fallback($$props['asChild'], false);
	let el = fallback($$props['el'], () => void 0, true);
	const {
		helpers: { isChecked, isIndeterminate },
		states: { checked },
		getAttrs: getAttrs2
	} = getCtx();
	function getStateAttr(state) {
		if (state === 'indeterminate') return 'indeterminate';
		if (state) return 'checked';
		return 'unchecked';
	}
	attrs = {
		...getAttrs2('indicator'),
		'data-state': getStateAttr(store_get(($$store_subs ??= {}), '$checked', checked))
	};
	if (asChild) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<!---->`;
		slot(
			$$payload,
			$$props,
			'default',
			{
				attrs,
				isChecked: store_get(($$store_subs ??= {}), '$isChecked', isChecked),
				isIndeterminate: store_get(($$store_subs ??= {}), '$isIndeterminate', isIndeterminate)
			},
			null
		);
		$$payload.out += `<!---->`;
	} else {
		$$payload.out += '<!--[!-->';
		$$payload.out += `<div${spread_attributes({ ...$$restProps, ...attrs })}><!---->`;
		slot(
			$$payload,
			$$props,
			'default',
			{
				attrs,
				isChecked: store_get(($$store_subs ??= {}), '$isChecked', isChecked),
				isIndeterminate: store_get(($$store_subs ??= {}), '$isIndeterminate', isIndeterminate)
			},
			null
		);
		$$payload.out += `<!----></div>`;
	}
	$$payload.out += `<!--]-->`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	bind_props($$props, { asChild, el });
	pop();
}
function getLabelData() {
	const NAME = 'label';
	const PARTS = ['root'];
	const getAttrs2 = createBitAttrs(NAME, PARTS);
	return {
		NAME,
		getAttrs: getAttrs2
	};
}
function Label$1($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['asChild', 'el']);
	push();
	var $$store_subs;
	let builder;
	let asChild = fallback($$props['asChild'], false);
	let el = fallback($$props['el'], () => void 0, true);
	const {
		elements: { root }
	} = createLabel();
	const { getAttrs: getAttrs2 } = getLabelData();
	const attrs = getAttrs2('root');
	builder = store_get(($$store_subs ??= {}), '$root', root);
	Object.assign(builder, attrs);
	if (asChild) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<!---->`;
		slot($$payload, $$props, 'default', { builder }, null);
		$$payload.out += `<!---->`;
	} else {
		$$payload.out += '<!--[!-->';
		$$payload.out += `<label${spread_attributes({ ...builder, ...$$restProps })}><!---->`;
		slot($$payload, $$props, 'default', { builder }, null);
		$$payload.out += `<!----></label>`;
	}
	$$payload.out += `<!--]-->`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	bind_props($$props, { asChild, el });
	pop();
}
function Label($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['class']);
	push();
	let className = fallback($$props['class'], void 0);
	Label$1(
		$$payload,
		spread_props([
			{
				class: cn(
					'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
					className
				)
			},
			$$restProps,
			{
				children: ($$payload2) => {
					$$payload2.out += `<!---->`;
					slot($$payload2, $$props, 'default', {}, null);
					$$payload2.out += `<!---->`;
				},
				$$slots: { default: true }
			}
		])
	);
	bind_props($$props, { class: className });
	pop();
}
function Form_label($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['class']);
	push();
	var $$store_subs;
	let className = fallback($$props['class'], void 0);
	const { labelAttrs } = getFormControl();
	Label(
		$$payload,
		spread_props([
			store_get(($$store_subs ??= {}), '$labelAttrs', labelAttrs),
			{
				class: cn('data-[fs-error]:text-destructive', className)
			},
			$$restProps,
			{
				children: ($$payload2) => {
					$$payload2.out += `<!---->`;
					slot($$payload2, $$props, 'default', { labelAttrs }, null);
					$$payload2.out += `<!---->`;
				},
				$$slots: { default: true }
			}
		])
	);
	if ($$store_subs) unsubscribe_stores($$store_subs);
	bind_props($$props, { class: className });
	pop();
}
function Form_field_errors($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['class', 'errorClasses']);
	push();
	let className = fallback($$props['class'], void 0);
	let errorClasses = fallback($$props['errorClasses'], void 0);
	Field_errors(
		$$payload,
		spread_props([
			{
				class: cn('text-sm font-medium text-destructive', className)
			},
			$$restProps,
			{
				children: invalid_default_snippet,
				$$slots: {
					default: ($$payload2, { errors, fieldErrorsAttrs, errorAttrs }) => {
						$$payload2.out += `<!---->`;
						slot($$payload2, $$props, 'default', { errors, fieldErrorsAttrs, errorAttrs }, () => {
							const each_array = ensure_array_like(errors);
							$$payload2.out += `<!--[-->`;
							for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
								let error = each_array[$$index];
								$$payload2.out += `<div${spread_attributes({
									...errorAttrs,
									class: clsx$1(cn(errorClasses))
								})}>${escape_html(error)}</div>`;
							}
							$$payload2.out += `<!--]-->`;
						});
						$$payload2.out += `<!---->`;
					}
				}
			}
		])
	);
	bind_props($$props, { class: className, errorClasses });
	pop();
}
function Form_field($$payload, $$props) {
	push();
	let form = $$props['form'];
	let name = $$props['name'];
	let className = fallback($$props['class'], void 0);
	Field($$payload, {
		form,
		name,
		children: invalid_default_snippet,
		$$slots: {
			default: ($$payload2, { constraints, errors, tainted, value }) => {
				$$payload2.out += `<div${attr('class', clsx$1(cn('space-y-2', className)))}><!---->`;
				slot($$payload2, $$props, 'default', { constraints, errors, tainted, value }, null);
				$$payload2.out += `<!----></div>`;
			}
		}
	});
	bind_props($$props, { form, name, class: className });
	pop();
}
function Button($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['class', 'variant', 'size', 'builders']);
	push();
	let className = fallback($$props['class'], void 0);
	let variant = fallback($$props['variant'], 'default');
	let size = fallback($$props['size'], 'default');
	let builders = fallback($$props['builders'], () => [], true);
	Button$1(
		$$payload,
		spread_props([
			{
				builders,
				class: cn(buttonVariants({ variant, size, className })),
				type: 'button'
			},
			$$restProps,
			{
				children: ($$payload2) => {
					$$payload2.out += `<!---->`;
					slot($$payload2, $$props, 'default', {}, null);
					$$payload2.out += `<!---->`;
				},
				$$slots: { default: true }
			}
		])
	);
	bind_props($$props, { class: className, variant, size, builders });
	pop();
}
const buttonVariants = tv({
	base: 'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground hover:bg-primary/90',
			destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});
function Form_button($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, []);
	Button(
		$$payload,
		spread_props([
			{ type: 'submit' },
			$$restProps,
			{
				children: ($$payload2) => {
					$$payload2.out += `<!---->`;
					slot($$payload2, $$props, 'default', {}, null);
					$$payload2.out += `<!---->`;
				},
				$$slots: { default: true }
			}
		])
	);
}
const Control = Control$1;
function Input($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['class', 'value', 'readonly']);
	push();
	let className = fallback($$props['class'], void 0);
	let value = fallback($$props['value'], void 0);
	let readonly = fallback($$props['readonly'], void 0);
	$$payload.out += `<input${spread_attributes({
		class: clsx$1(
			cn(
				'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
				className
			)
		),
		value,
		readonly,
		...$$restProps
	})}>`;
	bind_props($$props, { class: className, value, readonly });
	pop();
}
/**
 * @license lucide-svelte v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
	xmlns: 'http://www.w3.org/2000/svg',
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	'stroke-width': 2,
	'stroke-linecap': 'round',
	'stroke-linejoin': 'round'
};
function Icon($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, [
		'name',
		'color',
		'size',
		'strokeWidth',
		'absoluteStrokeWidth',
		'iconNode'
	]);
	push();
	let name = fallback($$props['name'], void 0);
	let color = fallback($$props['color'], 'currentColor');
	let size = fallback($$props['size'], 24);
	let strokeWidth = fallback($$props['strokeWidth'], 2);
	let absoluteStrokeWidth = fallback($$props['absoluteStrokeWidth'], false);
	let iconNode = fallback($$props['iconNode'], () => [], true);
	const mergeClasses = (...classes) =>
		classes
			.filter((className, index, array) => {
				return Boolean(className) && array.indexOf(className) === index;
			})
			.join(' ');
	const each_array = ensure_array_like(iconNode);
	$$payload.out += `<svg${spread_attributes(
		{
			...defaultAttributes,
			...$$restProps,
			width: size,
			height: size,
			stroke: color,
			'stroke-width': absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth,
			class: clsx$1(
				mergeClasses('lucide-icon', 'lucide', name ? `lucide-${name}` : '', $$sanitized_props.class)
			)
		},
		void 0,
		void 0,
		3
	)}><!--[-->`;
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let [tag, attrs] = each_array[$$index];
		element($$payload, tag, () => {
			$$payload.out += `${spread_attributes({ ...attrs }, void 0, void 0, 3)}`;
		});
	}
	$$payload.out += `<!--]--><!---->`;
	slot($$payload, $$props, 'default', {}, null);
	$$payload.out += `<!----></svg>`;
	bind_props($$props, {
		name,
		color,
		size,
		strokeWidth,
		absoluteStrokeWidth,
		iconNode
	});
	pop();
}
function Check($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const iconNode = [['path', { d: 'M20 6 9 17l-5-5' }]];
	Icon(
		$$payload,
		spread_props([
			{ name: 'check' },
			$$sanitized_props,
			{
				iconNode,
				children: ($$payload2) => {
					$$payload2.out += `<!---->`;
					slot($$payload2, $$props, 'default', {}, null);
					$$payload2.out += `<!---->`;
				},
				$$slots: { default: true }
			}
		])
	);
}
function Minus($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const iconNode = [['path', { d: 'M5 12h14' }]];
	Icon(
		$$payload,
		spread_props([
			{ name: 'minus' },
			$$sanitized_props,
			{
				iconNode,
				children: ($$payload2) => {
					$$payload2.out += `<!---->`;
					slot($$payload2, $$props, 'default', {}, null);
					$$payload2.out += `<!---->`;
				},
				$$slots: { default: true }
			}
		])
	);
}
function Checkbox($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['class', 'checked']);
	push();
	let className = fallback($$props['class'], void 0);
	let checked = fallback($$props['checked'], false);
	let $$settled = true;
	let $$inner_payload;
	function $$render_inner($$payload2) {
		Checkbox$1(
			$$payload2,
			spread_props([
				{
					class: cn(
						'border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer box-content h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
						className
					)
				},
				$$restProps,
				{
					get checked() {
						return checked;
					},
					set checked($$value) {
						checked = $$value;
						$$settled = false;
					},
					children: ($$payload3) => {
						Checkbox_indicator($$payload3, {
							class: cn('flex h-4 w-4 items-center justify-center text-current'),
							children: invalid_default_snippet,
							$$slots: {
								default: ($$payload4, { isChecked, isIndeterminate }) => {
									if (isChecked) {
										$$payload4.out += '<!--[-->';
										Check($$payload4, { class: 'h-3.5 w-3.5' });
									} else {
										$$payload4.out += '<!--[!-->';
										if (isIndeterminate) {
											$$payload4.out += '<!--[-->';
											Minus($$payload4, { class: 'h-3.5 w-3.5' });
										} else {
											$$payload4.out += '<!--[!-->';
										}
										$$payload4.out += `<!--]-->`;
									}
									$$payload4.out += `<!--]-->`;
								}
							}
						});
					},
					$$slots: { default: true }
				}
			])
		);
	}
	do {
		$$settled = true;
		$$inner_payload = copy_payload($$payload);
		$$render_inner($$inner_payload);
	} while (!$$settled);
	assign_payload($$payload, $$inner_payload);
	bind_props($$props, { class: className, checked });
	pop();
}
function Textarea($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['class', 'value', 'readonly']);
	push();
	let className = fallback($$props['class'], void 0);
	let value = fallback($$props['value'], void 0);
	let readonly = fallback($$props['readonly'], void 0);
	$$payload.out += `<textarea${spread_attributes({
		class: clsx$1(
			cn(
				'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
				className
			)
		),
		readonly,
		...$$restProps
	})}>`;
	const $$body = escape_html(value);
	if ($$body) {
		$$payload.out += `${$$body}`;
	}
	$$payload.out += `</textarea>`;
	bind_props($$props, { class: className, value, readonly });
	pop();
}
function Contact_form($$payload, $$props) {
	push();
	var $$store_subs;
	let data = $$props['data'];
	const form = superForm(data, {
		onSubmit: async ({ formData: formData2, cancel }) => {
			console.log(formData2);
			return async () => {};
		},
		validators: zodClient(formSchema)
	});
	const { form: formData, enhance } = form;
	let $$settled = true;
	let $$inner_payload;
	function $$render_inner($$payload2) {
		head($$payload2, ($$payload3) => {
			$$payload3.out += `<script src="https://js.hcaptcha.com/1/api.js?onload=onLoad" async defer=""><\/script><!---->`;
		});
		$$payload2.out += `<form class="flex w-full max-w-lg flex-col gap-8 rounded-md bg-main-background-300 p-10 text-white" method="POST">`;
		Form_field($$payload2, {
			form,
			name: 'name',
			children: ($$payload3) => {
				Control($$payload3, {
					children: invalid_default_snippet,
					$$slots: {
						default: ($$payload4, { attrs }) => {
							Form_label($$payload4, {
								children: ($$payload5) => {
									$$payload5.out += `<!---->Name`;
								},
								$$slots: { default: true }
							});
							$$payload4.out += `<!----> `;
							Input(
								$$payload4,
								spread_props([
									{ class: 'bg-main-background-100' },
									attrs,
									{
										get value() {
											return store_get(($$store_subs ??= {}), '$formData', formData).name;
										},
										set value($$value) {
											store_mutate(
												($$store_subs ??= {}),
												'$formData',
												formData,
												(store_get(($$store_subs ??= {}), '$formData', formData).name = $$value)
											);
											$$settled = false;
										}
									}
								])
							);
							$$payload4.out += `<!---->`;
						}
					}
				});
				$$payload3.out += `<!----> `;
				Form_field_errors($$payload3, {});
				$$payload3.out += `<!---->`;
			},
			$$slots: { default: true }
		});
		$$payload2.out += `<!----> `;
		Form_field($$payload2, {
			form,
			name: 'email',
			children: ($$payload3) => {
				Control($$payload3, {
					children: invalid_default_snippet,
					$$slots: {
						default: ($$payload4, { attrs }) => {
							Form_label($$payload4, {
								children: ($$payload5) => {
									$$payload5.out += `<!---->Email`;
								},
								$$slots: { default: true }
							});
							$$payload4.out += `<!----> `;
							Input(
								$$payload4,
								spread_props([
									{
										type: 'email',
										class: 'bg-main-background-100'
									},
									attrs,
									{
										get value() {
											return store_get(($$store_subs ??= {}), '$formData', formData).email;
										},
										set value($$value) {
											store_mutate(
												($$store_subs ??= {}),
												'$formData',
												formData,
												(store_get(($$store_subs ??= {}), '$formData', formData).email = $$value)
											);
											$$settled = false;
										}
									}
								])
							);
							$$payload4.out += `<!---->`;
						}
					}
				});
				$$payload3.out += `<!----> `;
				Form_field_errors($$payload3, {});
				$$payload3.out += `<!---->`;
			},
			$$slots: { default: true }
		});
		$$payload2.out += `<!----> `;
		Form_field($$payload2, {
			form,
			name: 'message',
			children: ($$payload3) => {
				Control($$payload3, {
					children: invalid_default_snippet,
					$$slots: {
						default: ($$payload4, { attrs }) => {
							Form_label($$payload4, {
								children: ($$payload5) => {
									$$payload5.out += `<!---->Message`;
								},
								$$slots: { default: true }
							});
							$$payload4.out += `<!----> `;
							Textarea(
								$$payload4,
								spread_props([
									{ class: 'bg-main-background-100' },
									attrs,
									{
										get value() {
											return store_get(($$store_subs ??= {}), '$formData', formData).message;
										},
										set value($$value) {
											store_mutate(
												($$store_subs ??= {}),
												'$formData',
												formData,
												(store_get(($$store_subs ??= {}), '$formData', formData).message = $$value)
											);
											$$settled = false;
										}
									}
								])
							);
							$$payload4.out += `<!---->`;
						}
					}
				});
				$$payload3.out += `<!----> `;
				Form_field_errors($$payload3, {});
				$$payload3.out += `<!---->`;
			},
			$$slots: { default: true }
		});
		$$payload2.out += `<!----> `;
		Form_field($$payload2, {
			form,
			name: 'privacyPolicy',
			children: ($$payload3) => {
				Control($$payload3, {
					children: invalid_default_snippet,
					$$slots: {
						default: ($$payload4, { attrs }) => {
							$$payload4.out += `<div class="flex items-center justify-start gap-4">`;
							Form_label($$payload4, {
								children: ($$payload5) => {
									$$payload5.out += `<a href="https://www.privacypolicies.com/live/2470fb14-022a-4f19-a2e0-2893fa1693fd">Privacy Policy</a>`;
								},
								$$slots: { default: true }
							});
							$$payload4.out += `<!----> `;
							Checkbox($$payload4, {
								get checked() {
									return store_get(($$store_subs ??= {}), '$formData', formData).privacyPolicy;
								},
								set checked($$value) {
									store_mutate(
										($$store_subs ??= {}),
										'$formData',
										formData,
										(store_get(($$store_subs ??= {}), '$formData', formData).privacyPolicy =
											$$value)
									);
									$$settled = false;
								}
							});
							$$payload4.out += `<!----></div>`;
						}
					}
				});
				$$payload3.out += `<!----> `;
				Form_field_errors($$payload3, {});
				$$payload3.out += `<!---->`;
			},
			$$slots: { default: true }
		});
		$$payload2.out += `<!----> `;
		Form_button($$payload2, {
			class: 'w-full bg-main-200 hover:bg-main-300',
			children: ($$payload3) => {
				$$payload3.out += `<!---->Send message`;
			},
			$$slots: { default: true }
		});
		$$payload2.out += `<!----> `;
		{
			$$payload2.out += '<!--[!-->';
		}
		$$payload2.out += `<!--]--></form>`;
	}
	do {
		$$settled = true;
		$$inner_payload = copy_payload($$payload);
		$$render_inner($$inner_payload);
	} while (!$$settled);
	assign_payload($$payload, $$inner_payload);
	if ($$store_subs) unsubscribe_stores($$store_subs);
	bind_props($$props, { data });
	pop();
}
function _page($$payload, $$props) {
	push();
	let data = $$props['data'];
	$$payload.out += `<div class="max-w-container flex w-full flex-col items-center justify-center gap-8"><h1 class="text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">Contact Me</h1> <p class="text-center text-lg font-medium text-gray-500 dark:text-gray-400">I'll get back to you as soon as I can!</p> `;
	Contact_form($$payload, { data: data.form });
	$$payload.out += `<!----></div>`;
	bind_props($$props, { data });
	pop();
}
export { _page as default };
