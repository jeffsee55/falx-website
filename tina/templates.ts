import type { TinaField } from "tinacms";
export function new_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "string",
      name: "description",
      label: "meta description",
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
    {
      type: "string",
      name: "description",
      label: "meta description",
    },
  ] as TinaField[];
}
