import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';

interface ContainsNullValuesErrorExtensions {
	collection: string;
	field: string;
}

export const messageConstructor = ({ collection, field }: ContainsNullValuesErrorExtensions) =>
	`Field "${field}" in collection "${collection}" contains null values.`;

export const ContainsNullValuesError = createError<ContainsNullValuesErrorExtensions>(
	ErrorCode.ContainsNullValues,
	messageConstructor,
	400
);
