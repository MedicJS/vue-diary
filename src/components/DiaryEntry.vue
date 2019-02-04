<template>
	<div class="diaryEntry">
		<div class="header">
			<template v-if="entry.editing">
				<input
					class="title"
					type="text"
					placeholder="Title"
					v-model="entry.title"
					style="border-bottom: 1px solid gray"
				>
			</template>
			<template v-else>
				<span class="title">{{entry.title}}</span>
			</template>
			<IconButton icon="trash" @click.native="deleteEntry" tabindex="-1" style="margin-left: 8px;"></IconButton>
		</div>
		<div class="content">
			<div class="entryFlex">
				<template v-if="entry.editing">
					<textarea class="entry" @input="contentUpdated" @keyup="contentKeyUp" v-model="entry.content"/>
				</template>
				<template v-else>
					<div v-for="(p, i) in paragraphs" :key="i" class="entry">{{p}}</div>
				</template>
			</div>
		</div>

		<div class="footer">
			<div class="footerFlex">
				<div class="footerInfo">
					<template v-if="!entry.editing">
						<timeago class="timeago" :datetime="entry.timeStamp" :auto-update="60"></timeago>
						<span style="margin-left:8px; color: gray">{{displayDate}}</span>
					</template>
				</div>
			</div>
			<div class="actions">
				<template v-if="entry.editing"></template>
				<template v-else></template>
				<IconButton class="stateIcon" :icon="stateIcon" @click.native="toggleState" tabindex="-1"></IconButton>
			</div>
		</div>
	</div>
</template>

<script>
import IconButton from "./IconButton";
import "vue-awesome/icons/check";
import "vue-awesome/icons/feather-alt";
import "vue-awesome/icons/trash";

export default {
	name: "DiaryEntry",
	components: {
		IconButton
	},
	props: {
		entry: Object,
		index: Number
	},
	computed: {
		stateIcon() {
			return this.entry.editing ? "check" : "feather-alt";
		},
		displayDate() {
			return this.entry.timeStamp
				? new Date(this.entry.timeStamp).toDateString()
				: "";
		},
		paragraphs() {
			return this.entry.content.split(/\n/g);
		}
	},
	methods: {
		toggleState() {
			if (this.entry.content.length === 0) return;
			this.entry.editing = !this.entry.editing;

			if (!this.entry.editing) {
				this.entry.timeStamp = new Date();
			}
			this.$emit("toggle-state", this.entry);
		},
		deleteEntry() {
			if (window.confirm("Are you sure you want to delete this entry?")) {
				this.$emit("delete-entry", this.index);
			}
		},
		contentUpdated() {
			window.unsavedChanges = !!this.entry.content.length;
		},
		contentKeyUp(event) {
			if (event.ctrlKey && event.key === "Enter") {
				this.toggleState();
			}
		}
	}
};
</script>

<style scoped>
.diaryEntry {
	background-color: rgb(255, 255, 255);
	padding: 8px;
	box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	transition: 0.33s;
	text-align: left;
	max-width: 800px;
}
.diaryEntry:hover {
	box-shadow: 0px 0px 18px rgba(255, 196, 100, 1);
}
.diaryEntry:focus-within {
	box-shadow: 0px 0px 18px rgba(255, 196, 0, 1);
}
.header {
	display: flex;
	flex-wrap: wrap;
}
.title {
	font-size: 16pt;
	border: none;
	flex-grow: 1;
}
.content {
	display: flex;
	flex-wrap: wrap;
	margin-top: 16px;
	background-color: rgb(255, 255, 255);
	border-radius: 8px;
}
.entryFlex {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}
.entry {
	border: none;
	resize: none;
	flex-grow: 1;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
		sans-serif;

	font-size: 12pt;
}
.entry textarea {
	height: 200px;
	box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	outline: none;
	transition: 0.33s;
	padding: 10px;
}
.entry div {
	padding: 4px;
}
.entry textarea:focus {
	box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.5);
}
.footer {
	display: flex;
	justify-content: space-between;
	margin-top: 8px;
	font-size: 8pt;
}
.footerFlex {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.footerInfo {
	color: rgb(142, 0, 185);
	margin-top: auto;
}
.stateIcon {
	min-height: 48px;
	min-width: 48px;
	background-image: linear-gradient(rgb(223, 116, 255), rgb(160, 15, 204));
}
</style>
