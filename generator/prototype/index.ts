import { FactorioPrototypeApiJson, Prototype } from "../FactorioPrototypeApiJson.js"
import { GenerationContext } from "../GenerationContext.js"
import { generatePrototypes, preprocessPrototypes } from "./prototypes.js"
import { generateTypes, preprocessTypes } from "./types.js"

export class PrototypeGenerationContext extends GenerationContext<FactorioPrototypeApiJson> {
  stageName = "prototype"

  prototypes = new Map<string, Prototype>(this.apiDocs.prototypes.map((e) => [e.name, e]))
  types = new Set<string>(this.apiDocs.types.map((e) => e.name))

  getOnlineDocUrl(reference: string): string {
    let relative_link: string
    if (this.prototypes.has(reference)) {
      relative_link = `prototypes/${reference}.html`
    } else if (this.types.has(reference)) {
      relative_link = "types.html#" + reference
    } else if (reference.includes(".")) {
      const className = reference.substring(0, reference.indexOf("."))
      return this.getOnlineDocUrl(className) + "#" + reference
    } else {
      this.warning(`Could not get doc url for ${reference}`)
      relative_link = ""
    }

    return this.docUrlBase() + relative_link
  }
  preprocessAll(): void {
    preprocessPrototypes(this)
    preprocessTypes(this)
  }

  generateAll(): void {
    generatePrototypes(this)
    generateTypes(this)
  }
}