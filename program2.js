//Return object with issues grouped by severity
//Input will be list of issues.
//Issue will contain a key severity with string value.
//Return an object with severity as key and list of assignees as value.
function groupBySeverity(issues){
    const groupedIssues = {};
    issues.forEach(issue => {
      if (groupedIssues[issue.severity]) {
        groupedIssues[issue.severity].push(issue.assignee);
      } else {
        groupedIssues[issue.severity] = [issue.assignee];
      }
    });
    return groupedIssues;
  }