<script lang="ts">
	import { notifications, type NotificationsStore } from '$lib/stores/notifications';
	let notifs: NotificationsStore[];
	$: notifs = $notifications as NotificationsStore[];
</script>

{#if notifs.length > 0}
	<div class="notifications bg-white">
		{#each notifs as notification}
			<div class="border p-4 w-96 notification-type-{notification.type}">
				{notification.message}
			</div>
		{/each}
	</div>
{/if}

<style lang="postcss">
	.notifications {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
	}
</style>
