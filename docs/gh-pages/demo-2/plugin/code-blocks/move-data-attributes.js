// This function moves all <pre> attribute with name `data-*` to
// the `<code>` element.
// This is to workaround the fact that Pandoc (Revealjs also) can
// only apply the attributes to the `<pre>` element.
//
// TODO: This could be probably achieved by a pandoc filter.
//
function moveDataAttributesToCodeElement() {
  const codeElements = document.querySelectorAll("pre > code")
  codeElements.forEach((code, index) => {
    console.log(
      `Moving all 'data-' attributes of code block ${index} to <code>`,
      code,
    )
    const pre = code.parentNode
    console.log(pre)

    Array.from(pre.attributes).forEach((attr) => {
      if (
        attr.name.startsWith("data-") ||
        attr.name.startsWith("contenteditable")
      ) {
        code.setAttribute(attr.name, attr.value)
        pre.removeAttribute(attr.name)
      }
    })
  })
}
