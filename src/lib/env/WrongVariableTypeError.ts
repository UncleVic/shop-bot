export class WrongVariableTypeError extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(varName: string, varType: string, value: any) {
    super(`Variable with name '${varName}' isn't type of '${varType}', value is < ${value} >`);
  }
}
