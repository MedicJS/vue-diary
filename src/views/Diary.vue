<template>
	<div class="diary">
		<h1>Diary</h1>
		<div class="entriesWrapper">
			<div class="entries">
				<DiaryEntry
					class="entry"
					v-for="(entry, i) in entries"
					:key="i"
					v-bind:entry.sync="entry"
					:index="i"
					@toggle-state="entryToggledState"
					@delete-entry="deleteEntry"
				/>
			</div>
		</div>
	</div>
</template>

<script>
window.onbeforeunload = function(e) {
	return unsavedChanges
		? "Are you sure? Unsaved changes will be lost"
		: undefined;
};

import DiaryEntry from "../components/DiaryEntry";
import { mapState } from "vuex";

export default {
	name: "Diary",
	components: {
		DiaryEntry
	},
	mounted() {},
	computed: {
		...mapState(["entries"])
	},
	methods: {
		entryToggledState(entry) {
			if (entry.editing) return;

			if (this.entries.every(e => !e.editing))
				this.$store.dispatch("addEntry", {
					title: "",
					content: "",
					editing: true
				});
		},
		deleteEntry(index) {
			this.$store.dispatch("removeEntry", index);
		}
	}
};
</script>

<style scoped>
.diary {
	font-family: Arial, Helvetica, sans-serif;
	height: 100%;
}
h1 {
	font-family: monospace;
	font-size: 24pt;
}
.entriesWrapper {
	display: flex;
	justify-content: space-around;
}
.entries {
	overflow-y: auto;
	scroll-behavior: smooth;
	display: flex;
	flex-direction: column;
}
.entry {
	margin: 8px;
	flex-grow: 1;
}
</style>