function addHighlightJSKeywords(hljs, keywords) {
  console.log("Setting keywords in hijs:", keywords)

  for (const [lang, kwds] of keywords.entries()) {
    const l = hljs.getLanguage(lang)

    if (l == null) {
      console.warn(`No language '${lang}'`)
      continue
    }

    var built_in = l.keywords.built_in
    console.info(`Setting keywords '${kwds}' for '${lang}'`)
    hljs.getLanguage(lang).keywords.built_in = [
      ...new Set([...built_in, ...kwds]),
    ]
  }
}
