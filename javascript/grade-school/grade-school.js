export class GradeSchool {
  constructor(){
    this.__roster = {}
  }

  roster() {
    /*
     * Return deep copy of the database:
     *   - iterate over roster keys (grade_levels)
     *   - accumulate .slice() copies of each grade's student list
     *   - in a new object deep_acc
     */
    return Object.keys(this.__roster)
        .reduce((deep_acc, grade_level) =>
            Object.assign( deep_acc, {[grade_level]: this.__roster[grade_level].slice()} )
        , {})
  }

  add(name, grade) {
    this.__roster[grade] = (this.__roster[grade])
                              ? this.__roster[grade].concat([name]).sort()
                              : [name]
  }

  grade(g) {
    /*
     * Return names of all students in the given grade.
     *   - if we have a name list for the given grade return a copy
     *   - if not return []
     */
     return ((this.__roster[g]) ? this.__roster[g].slice() : 0) || []
  }
}