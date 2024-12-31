const calcSpanProps = (spanMonths, spanDays) =>
  spanDays > 80
    ? {
        columnOffset: 14,
        columnUnit: "day",
        magnetUnit: "day",
        magnetOffset: 1,
        alignStartTo: "month",
        headers: [
          {
            unit: "month",
            format: "MM/YYYY",
            offset: 1,
          },
          { unit: "week", format: "[Sem.]w", offset: spanDays > 200 ? 2 : 1 },
        ],
      }
    // : spanDays > 26
    // ? {
    //     columnOffset: 3,
    //     columnUnit: "day",
    //     magnetUnit: "day",
    //     magnetOffset: 1,
    //     alignStartTo: "week",
    //     headers: [
    //       { unit: "week", format: "MM/YYYY", offset: 1 },
    //       { unit: "day", format: "DD", offset: Math.ceil(spanDays / 50) },
    //     ],
    //   }
    : spanDays > 20
    ? {
        columnOffset: 1,
        columnUnit: "day",
        magnetUnit: "day",
        magnetOffset: 1,
        alignStartTo: "week",
        headers: [
          { unit: "week", format: "MM/YYYY", offset: 1 },

          { unit: "day", format: "d DD", offset: 1 },
        ],
      }
    : spanDays > 8
    ? {
        columnOffset: 1,
        columnUnit: "day",
        magnetUnit: "day",
        magnetOffset: 1,
        alignStartTo: "week",
        headers: [
          { unit: "week", format: "MM/YYYY", offset: 1 },

          { unit: "day", format: "ddd DD", offset: 1 },
        ],
      }
    : spanDays > 4
    ? {
        columnOffset: 6,
        columnUnit: "hour",
        magnetUnit: "hour",
        magnetOffset: 1,
        alignStartTo: "day",

        headers: [
          { unit: "day", format: "ddd DD MMM YYYY", offset: 1 },
          { unit: "hour", format: "HH" },
        ],
      }
    : spanDays > 1
    ? {
        columnOffset: 3,
        columnUnit: "hour",
        magnetUnit: "hour",
        magnetOffset: 1,
        alignStartTo: "day",

        headers: [
          { unit: "day", format: "dddd DD/MM/YYYY", offset: 1 },
          { unit: "hour", format: "HH", offset: 1 },
        ],
      }
    : {
        columnOffset: 30,
        columnUnit: "minute",
        magnetUnit: "minute",
        magnetOffset: 15,
        alignStartTo: "day",
        headers: [
          { unit: "day", format: "dddd DD/MM/YYYY", offset: 1 },
          { unit: "hour", format: "H:mm", offset: Math.ceil(spanDays) },
        ],
      };

const adjustTzOffset = (date, offset) => {
  date.setUTCHours(date.getUTCHours() - offset);
  return date;
};

module.exports = { calcSpanProps, adjustTzOffset };
