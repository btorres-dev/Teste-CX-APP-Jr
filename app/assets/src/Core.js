const formatDate = (date) => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleString("pt-BR");
  return formattedDate;
};

const Core = {
  formatDate,
};

export default Core;
