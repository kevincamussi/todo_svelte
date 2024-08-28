<script lang="ts">
	import Task from '$lib/Task.svelte';

	interface ITask {
		text: string;
		completed: boolean;
	}

	export let tasks: ITask[] = [
		{ text: 'My task', completed: false },
		{ text: 'My task 2 ', completed: true }
	];

	export const addTasks = () => {
		tasks = [
			...tasks,
			{
				text: 'Teste',
				completed: false
			}
		];
	};
</script>

<div class="mx-auto flex h-screen max-w-lg flex-col items-center justify-center space-y-2 p-4">
	{#each tasks as task}
		<Task bind:text={task.text} bind:completed={task.completed} />
	{/each}
	<button
		aria-label="Add Task"
		class=" flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-dashed border-neutral-300 p-3 text-neutral-500"
		on:click={addTasks}
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
