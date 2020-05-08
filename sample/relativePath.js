/**
 * Given a source directory and a target filename, return the relative
 * file path from source to target.
 * @param source {String} directory path to start from for traversal
 * @param target {String} directory path and filename to seek from source
 * @return Relative path (e.g. "../../style.css") as {String}
 */
function getRelativePath(source, target) {
	var sep = (source.indexOf("/") !== -1) ? "/" : "\\",
		targetArr = target.split(sep),
		sourceArr = source.split(sep),
		filename = targetArr.pop(),
		targetPath = targetArr.join(sep),
		relativePath = "";
	
	while (targetPath.indexOf(sourceArr.join(sep)) === -1) {
		sourceArr.pop();
		relativePath += ".." + sep;
	}
	
	var relPathArr = targetArr.slice(sourceArr.length);
	relPathArr.length && (relativePath += relPathArr.join(sep) + sep);
	
	return relativePath + filename;
}

console.log(getRelativePath("/users/eric/src/csslint", "/users/eric/style.css"));