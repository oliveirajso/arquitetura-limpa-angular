export class EnsureModuleLoadedOnGuard {
  constructor(targetmodule: any) {
    if (targetmodule) {
      throw new Error(
        `${targetmodule.constructor.name} já foi carregado. Importe este módulo apenas no AppModule.`
      );
    }
  }
}
