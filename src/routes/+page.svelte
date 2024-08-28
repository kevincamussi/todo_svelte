<script>
	import Task from '$lib/Task.svelte';
</script>

<div class="mx-auto flex h-screen max-w-lg flex-col items-center justify-center space-y-2 p-4">
	<Task />
	<Task />
	<Task />
	<Task />
	<button
		class=" flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-dashed border-neutral-300 p-3 text-neutral-500"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
		<span>Add Task</span>
	</button>
</div>
