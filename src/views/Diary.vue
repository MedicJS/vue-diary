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

export default {
	name: "Diary",
	components: {
		DiaryEntry
	},
	mounted() {
		this.load();
	},
	data() {
		return {
			entries: []
		};
	},
	methods: {
		save() {
			localStorage.entries = JSON.stringify(this.entries);
		},
		load() {
			let storedEntries = JSON.parse(localStorage.entries);
			this.entries = storedEntries.length
				? storedEntries
				: [{ title: "", content: "", editing: true }];
		},
		entryToggledState(entry) {
			if (entry.editing) return;

			this.checkReplaceNewEntry();
			this.save();
		},
		deleteEntry(index) {
			this.entries.splice(index, 1);

			this.checkReplaceNewEntry();
			this.save();
		},
		checkReplaceNewEntry() {
			if (this.entries.every(e => !e.editing)) {
				this.entries.splice(0, 0, {
					title: "",
					content: "",
					editing: true
				});
			}
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
	font-family:monospace;
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