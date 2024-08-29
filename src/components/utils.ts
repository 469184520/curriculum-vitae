const handleBolderText = (params:string,boldWordsList:string[]|undefined) => {
  let formattedItem = params;
  boldWordsList?.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi'); // 使用正则表达式匹配需要加粗的词
    formattedItem = formattedItem.replace(regex, '<strong>\$1</strong>'); // 替换为加粗
  });
  return formattedItem
}
export { handleBolderText }