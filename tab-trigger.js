{
  "keys": ["tab"], 
  "command": "expand_abbreviation_by_tab", 

  // put comma-separated syntax selectors for which 
  // you want to expandEmmet abbreviations into "operand" key 
  // instead of SCOPE_SELECTOR.
  // Examples: source.js, text.html - source
  "context": [
    {
      "operand": "meta.group.braces.round.js, text.html", 
      "operator": "equal", 
      "match_all": true, 
      "key": "selector"
    }, 

    // run only if there's no selected text
    {
      "match_all": true, 
      "key": "selection_empty"
    },

    // don't work if there are active tabstops
    {
      "operator": "equal", 
      "operand": false, 
      "match_all": true, 
      "key": "has_next_field"
    }, 

    // don't work if completion popup is visible and you
    // want to insert completion with Tab. If you want to
    // expand Emmet with Tab even if popup is visible -- 
    // remove this section
    {
      "operand": false, 
      "operator": "equal", 
      "match_all": true, 
      "key": "auto_complete_visible"
    }, 
    {
      "match_all": true, 
      "key": "is_abbreviation"
    }
  ]
}