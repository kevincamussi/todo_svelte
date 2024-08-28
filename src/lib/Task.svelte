<script lang="ts">
	export let text: string;
	export let completed: boolean;
</script>

<div class="w-full space-x-2 rounded-md border border-neutral-300 p-3 shadow-sm">
	<input
		type="checkbox"
		class="ml-auto cursor-pointer accent-purple-600"
		bind:checked={completed}
	/>
	<span>{text}</span>
</div>
