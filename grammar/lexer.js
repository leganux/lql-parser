const moo = require("moo");

const lexer = moo.compile({
	where: "where",
	create: "create",
	using: "using",
	deletekw: "delete",
	from: "from",
	select: "select",
	insert: "insert",
	like: "like",
	and: "and",
	update: "update",
	set: "set",
	star: "*",
	ws: /[ \t]+/,
	word: /[a-zA-Z0-9]+/,
	quotationWord: /"[a-zA-Z]+"/,
	quotationWordNumber: /"[a-zA-Z0-9]+"/,
	lBracket: "[",
	rBracket: "]",
	lcBracket: "{",
	rcBracket: "}",
	comma: ",",
	twoPoints: ":",
	equal: "=",
	bigger: ">",
	smaller: "<",
	biggerEqual: ">=",
	smallerEqual: "<=",
});

module.exports = lexer;
