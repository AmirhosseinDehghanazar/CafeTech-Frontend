import { useNumericFormat, NumberFormatBase } from "react-number-format";

const persianNumeral = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function CustomNumeralNumericFormat(props) {
  const { format, removeFormatting, isCharacterSame, ...rest } =
    useNumericFormat(props);

  const _format = (val) => {
    const _val = format(val);
    return _val.replace(/\d/g, ($1) => persianNumeral[Number($1)]);
  };

  const _removeFormatting = (val) => {
    const _val = val.replace(new RegExp(persianNumeral.join("|"), "g"), ($1) =>
      persianNumeral.indexOf($1)
    );

    return removeFormatting(_val);
  };

  const _isCharacterSame = (compareMeta) => {
    const isCharSame = isCharacterSame(compareMeta);
    const {
      formattedValue,
      currentValue,
      formattedValueIndex,
      currentValueIndex,
    } = compareMeta;
    const curChar = currentValue[currentValueIndex];
    const newChar = formattedValue[formattedValueIndex];
    const curPersianChar = persianNumeral[Number(curChar)] ?? curChar;
    const newPersianChar = persianNumeral[Number(newChar)] ?? newChar;

    return isCharSame || curPersianChar || newPersianChar;
  };

  return (
    <NumberFormatBase
      displayType="text"
      format={_format}
      removeFormatting={_removeFormatting}
      isCharacterSame={_isCharacterSame}
      {...rest}
    />
  );
}
