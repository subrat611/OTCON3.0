export function generateMembers(text) {
  const newLineSeparatedArr = text.split("\n");
  const internationAdvisoryBoard = [];

  newLineSeparatedArr.map((data) => {
    const boardMember = data.split(",");

    const item = {
      name: boardMember[0].trim(),
      institute: boardMember[1].trim() || "",
      place: boardMember[2] ? boardMember[2].trim() : null,
    };

    internationAdvisoryBoard.push(item);
  });

  return internationAdvisoryBoard;
}
