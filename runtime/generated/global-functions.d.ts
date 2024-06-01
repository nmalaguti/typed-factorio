// This is an auto-generated file. Do not edit directly!

/** @noSelfInFile */

import type { LocalisedString, table, uint } from "factorio:runtime"

declare global {
  /**
   * `log()` can print {@link LocalisedString LocalisedStrings} to the Factorio {@linkplain https://wiki.factorio.com/Log_file log file}. This, in combination with the serpent library, makes debugging in the data stage easier because it allows the inspection of entire prototype tables. For example, printing all properties of the sulfur item prototype can be done like so: `log(serpent.block(data.raw["item"]["sulfur"]))`
   */
  function log(string: LocalisedString): void
  /**
   * `localised_print()` allows printing {@link LocalisedString} to stdout without polluting the Factorio {@linkplain https://wiki.factorio.com/Log_file log file}. This is primarily useful when communicating with external tools that launch Factorio as a child process.
   */
  function localised_print(string: LocalisedString): void
  /**
   * Factorio provides the `table_size()` function as a simple way to determine the size of tables with non-continuous keys, as the standard `#` operator does not work correctly for these. The function is a C++ implementation of the following Lua code, which is faster than doing the same in Lua:
   *
   * ```
   * local function size(t)
   *   local count = 0
   *   for k,v in pairs(t) do
   *     count = count + 1
   *   end
   *   return count
   * end
   * ```
   *
   * Note that `table_size()` does not work correctly for {@link LuaCustomTable}, their size has to be determined with {@link LuaCustomTable#length LuaCustomTable::length_operator} instead.
   */
  function table_size(table: table): uint
}
