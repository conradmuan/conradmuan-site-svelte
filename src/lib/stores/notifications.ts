// Taken from https://svelte.dev/repl/2254c3b9b9ba4eeda05d81d2816f6276?version=3.32.2
import { writable, type Writable, derived } from 'svelte/store';

enum MessageType {
	DEFAULT = 'default',
	DANGER = 'danger',
	WARNING = 'warning',
	INFO = 'info',
	SUCCESS = 'success'
}

export type NotificationsStore = {
	id: number;
	type: MessageType;
	message: string;
	timeout: number;
};

const TIMEOUT = 3000;

function createNotificationStore() {
	const _notifications: Writable<NotificationsStore[]> = writable([]);

	function send(message: string, type = MessageType.DEFAULT, timeout: number = TIMEOUT) {
		_notifications.update((state) => {
			return [...state, { id: id(), type, message, timeout }];
		});
	}

	const notifications = derived(_notifications, ($_notifications, set) => {
		set($_notifications);
		if ($_notifications.length > 0) {
			const timer = setTimeout(() => {
				_notifications.update((state) => {
					state.shift();
					return state;
				});
			}, $_notifications[0].timeout);
			return () => {
				clearTimeout(timer);
			};
		}
	});
	const { subscribe } = notifications;

	return {
		subscribe,
		send,
		default: (msg: string, timeout?: number) => send(msg, MessageType.DEFAULT, timeout),
		danger: (msg: string, timeout?: number) => send(msg, MessageType.DANGER, timeout),
		warning: (msg: string, timeout?: number) => send(msg, MessageType.WARNING, timeout),
		info: (msg: string, timeout?: number) => send(msg, MessageType.INFO, timeout),
		success: (msg: string, timeout?: number) => send(msg, MessageType.SUCCESS, timeout)
	};
}

function id() {
	return Date.now();
}

export const notifications = createNotificationStore();
