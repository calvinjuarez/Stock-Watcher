<template>
<form id="add-stock">
	<label class="for-screenreaders" for="add-stock-symbol">Enter stock symbol</label>
	<input class="form-control" id="add-stock-symbol" name="add-stock-symbol" type="text" placeholder="Enter stock symbol..." required>
	<button class="button" id="add-stock-submit" name="add-stock-submit" type="submit">Add</button>
</form>
</template>

<script>
export default {
	name: 'formAddStock',
}
</script>

<style></style>
