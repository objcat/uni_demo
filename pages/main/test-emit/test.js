const emit = function() {
	uni.$emit('normal_emit_js', {"value": "emit from js"});
}

const logout = function() {
	uni.$emit('emit_logout', {"value": "emit from js"});
}

export default {
	emit,
	logout
}