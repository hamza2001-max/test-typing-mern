const parts: JSX.Element[] = [];
let currentPart: JSX.Element[] = [];
function MyComponent() {
const letterSpans = testSentence
.split("")
.map((letter) => {
return `<span class="text-red-500">${letter}</span>`;
})
.join("");
return <div dangerouslySetInnerHTML={{ __html: letterSpans }}></div>;
}
<div className="flex">
{testSentence.split("").map((letter, index) => {
if (letter === " ") {
return <span>&nbsp;</span>;
}
if (index <= inputValue.length - 1) {
if (
testSentence.split("")[index] ===
inputValue.split("")[inputValue.length - 1]
) {
if (index === inputValue.length - 1) {
return <span className="text-green-500">{letter}</span>;
} else {
if (
testSentence.split("")[index] === inputValue.split("")[index]
) {
return <span className="text-green-500">{letter}</span>;
} else {
return <span className="text-red-500">{letter}</span>;
}
}
} else {
if (
testSentence.split("")[index] === inputValue.split("")[index]
) {
return <span className="text-green-500">{letter}</span>;
}
if (
testSentence.split("")[index] !== inputValue.split("")[index]
) {
return <span className="text-red-500">{letter}</span>;
}
}
}
return <span>{letter}</span>;
})}
</div>
useEffect(() => {
for (let i = 0; i < newTestSentence.length; i++) {
const child = newTestSentence[i].props.children;
if (child === " ") {
if (currentPart !== null) {
parts.push(...currentPart);
currentPart = [];
}
} else {
currentPart.push(newTestSentence[i]);
}
}
if (currentPart !== null) {
parts.push(...currentPart);
}
}, [newTestSentence]);
    // const hasRedLetters = () => {
    //   return newTestSentence.find((element) => {
    //     return (
    //       element.props.className === "text-red-500" && console.log(element)
    //     );
    //   });
    // };