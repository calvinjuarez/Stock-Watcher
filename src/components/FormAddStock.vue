<template>
<form class="form form-small  add-stock" id="add-stock">
	<label class="for-screenreaders" for="add-stock-symbol">Enter stock symbol</label>
	<input class="form-control  add-stock-symbol" id="add-stock-symbol" name="add-stock-symbol" type="text" placeholder="Enter stock symbol..." required>
	<button class="button  form-button  add-stock-submit" id="add-stock-submit" name="add-stock-submit" type="submit">Add</button>
</form>
</template>

<script>
export default {
	name: 'formAddStock',
}
</script>

<style>
/*form*/.add-stock {}
/*input*/.add-stock-symbol {}
/*button*/.add-stock-submit {
	min-width: 10em;
	color: var(--white);
	text-transform: uppercase;
	background-color: var(--green);
}
</style>
