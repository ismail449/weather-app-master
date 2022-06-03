const useDate = (index = 0) => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const dayNumber = date.getDate();
  return {
    month: (month + index) % 12,
    day: (day + index) % 7,
    dayNumber: (dayNumber + index) % 31,
  };
};

export default useDate;
