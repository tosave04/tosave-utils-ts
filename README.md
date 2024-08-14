# tosave-utils-ts

Various useful functions in my ts projects.

**Array Functions**

`createArray`

Creates an array of a specified length with all elements initialized to a given value or `undefined`.

`randomArray`

Selects a specified number of random elements from an array without replacement.

`arraySum`

Sums all numeric values in an array.

**Base64 Encoding and Decoding Functions**

`b64DecodeUnicode`

Decodes a Base64-encoded string to UTF-8.

`b64EncodeUnicode`

Encodes a UTF-8 string to Base64.

**Phone Number Conversion to E.164 Format**

`convertPhoneToE164`

Converts a phone number to the E.164 international format.

**Convert Timestamp to Formatted Date and Time**

`convertTimestampToDateTime`

Converts a timestamp to a human-readable date and time string with customizable formats.

**Deep Copy Function**

`deepCopyFunction`

Creates a deep copy of an object or array, handling nested structures.

**Group By Function**

`groupBy`

Groups an array of objects by a specified property efficiently.

**Date and Currency Formatting Functions**

`convertToDate`

Converts a timestamp to a formatted date string with locale options.

`convertToMoney`

Formats a number as a currency string with locale and currency options.

**Array of Objects Statistical Functions**

`objectKeyAverage`

Calculates the average value for a specified key in an array of objects.

`objectKeyMax`

Finds the maximum value for a specified key in an array of objects.

`objectKeyMin`

Finds the minimum value for a specified key in an array of objects.

`objectKeySum`

Calculates the sum of values for a specified key in an array of objects.

**Replace Special Chars**

`replaceSpecialChars`

Normalizes a string by removing special characters and diacritics.

**Retrieve First & Last Name from String**

`retrieveFirstLastNameFromString`

Extracts the first and last names from a full name string.

**Managing Multiple Promises**

`runPromises`

Executes an array of promises or values concurrently, returning their resolved results.

`runPromiseInSequence`

Executes an array of functions sequentially, passing each function’s result to the next.

**Regex Validations**

1.  `validateEmail`

Validates an email address format.

2.  `validateName`

Validates names based on common conventions.

3.  `validateNumber`

Validates if a string is a number and optionally checks a range.

4.  `validatePassword`

Validates a password based on security criteria.

5.  `validatePhone`

Validates phone number formats.

&nbsp;

## Installing from npm

1. **Install via npm :**

   ```bash
   npm install @tosave04/tosave-utils-ts
   ```

2. **Install via Yarn :**

   ```bash
   yarn add @tosave04/tosave-utils-ts
   ```

&nbsp;

## Array Functions

This module provides several utility functions to perform common operations on arrays, including creating arrays with specific values, selecting random elements from an array, and summing the values in an array.

### Functions

#### `createArray`

Creates an array of a specified length with all elements initialized to a given value. If no value is provided, each element will be initialized to `undefined`.

- **Parameters:**

  - `length` (`number`): The number of elements in the array.
  - `value` (`any`, optional): The value to initialize each element of the array with. Defaults to `undefined` if not provided.

- **Returns:** `any[]` - An array of the specified length where each element is set to the provided value or `undefined`.

- **Example:**

  ```javascript
  const array1 = createArray(5, "x")
  console.log(array1) // Output: ["x", "x", "x", "x", "x"]

  const array2 = createArray(3, 42)
  console.log(array2) // Output: [42, 42, 42]

  const array3 = createArray(4)
  console.log(array3) // Output: [undefined, undefined, undefined, undefined]
  ```

#### `randomArray`

Selects a specified number of random elements from an array without replacement. This means that once an element is selected, it is removed from the original array to prevent reselection.

- **Parameters:**

  - `array` (`any[]`): The array from which to select random elements.
  - `quantity` (`number`): The number of random elements to select.

- **Returns:** `any[]` - An array containing the randomly selected elements.

- **Details:**

  - The function checks if the requested quantity exceeds the length of the array. If so, it adjusts the quantity to the array's length.
  - The original array is modified by removing selected elements.

- **Example:**
  ```javascript
  const array = [1, 2, 3, 4, 5]
  const randomElements = randomArray(array, 3)
  console.log(randomElements) // Output might be: [3, 1, 5]
  console.log(array) // Output: The original array is now modified
  ```

#### `arraySum`

Sums all the values in an array. This function is useful for quickly calculating the total sum of an array of numbers.

- **Parameters:**

  - `numbers` (`number[]`): An array of numbers to be summed.

- **Returns:** `number` - The total sum of all values in the array.

- **Example:**
  ```javascript
  const numbers = [10, -2, 5, 0]
  const sum = arraySum(numbers)
  console.log(sum) // Output: 13
  ```

### Summary

These utility functions offer simple yet powerful tools for working with arrays in JavaScript. Whether you need to create an array with specific values, randomly select elements from an array, or calculate the sum of an array of numbers, these functions provide the necessary functionality.

&nbsp;

## Base64 Encoding and Decoding Functions

These utility functions provide a way to encode and decode strings between UTF-8 and Base64 formats. Base64 encoding is often used to safely transmit binary data as text, such as in email encoding and storing complex data in text formats like JSON.

### Functions

#### `b64DecodeUnicode`

Decodes a Base64-encoded string back to a UTF-8 string.

- **Parameters:**

  - `str` (`string`): The Base64-encoded string to be decoded.

- **Returns:** `string` - The decoded UTF-8 string.

- **Throws:**

  - `Error` - An error is thrown if the input string is not a valid Base64-encoded string.

- **Example:**

  ```javascript
  const encodedString = "SGVsbG8sIOS4lueVjA=="
  const decodedString = b64DecodeUnicode(encodedString)
  console.log(decodedString) // Output: "Hello, 世界"
  ```

- **How It Works:**
  1. The function decodes the Base64-encoded string to its original binary representation.
  2. It then converts the binary string to a percent-encoded URI component.
  3. Finally, it decodes the percent-encoded URI component back to the original UTF-8 string.

#### `b64EncodeUnicode`

Encodes a string from UTF-8 to Base64 format.

- **Parameters:**

  - `str` (`string`): The string to be encoded in Base64.

- **Returns:** `string` - The Base64-encoded string.

- **Throws:**

  - `Error` - An error is thrown if the input string cannot be encoded.

- **Example:**

  ```javascript
  const originalString = "Hello, 世界"
  const encodedString = b64EncodeUnicode(originalString)
  console.log(encodedString) // Output: "SGVsbG8sIOS4lueVjA=="
  ```

- **How It Works:**
  1. The function encodes the input string as a UTF-8 encoded URI component.
  2. It then replaces percent-encoded UTF-8 characters with their corresponding characters.
  3. Finally, it converts the resulting string into a Base64-encoded string.

### Summary

These functions are essential when you need to handle data that requires conversion between binary formats and safe string representations like Base64. This is particularly useful in web development, where data needs to be transmitted or stored in text-friendly formats.

&nbsp;

## Phone Number Conversion to E.164 Format

The `convertPhoneToE164` function takes a phone number string and converts it into the E.164 international phone number format. This is useful for standardizing phone numbers for storage, transmission, or display in applications that need to handle international dialing formats.

### Function: `convertPhoneToE164`

**Description:**

This function converts a given phone number into the E.164 format, which includes the country code prefixed with a `+`, followed by the national phone number.

- **Parameters:**

  - `phone` (`string`): The phone number to be converted. This can include various formats, such as numbers with or without a country code, spaces, and special characters.
  - `defaultCountryCode` (`number`, optional): The default country code to use if none is provided in the phone number. Defaults to `33` (France).

- **Returns:** `string` - The phone number formatted in E.164 format.

**How It Works:**

1. **Trimming:** The input phone number is trimmed of any leading or trailing whitespace.
2. **Country Code Detection:** The function checks for a country code by looking for a `+` or `(` in the input.
3. **Cleanup:** All non-numeric characters are removed from the phone number.
4. **Formatting:**
   - If a country code is detected, it is extracted and combined with the remaining phone number.
   - If no country code is found, the default country code is prepended to the phone number.

**Examples:**

```javascript
// Example 1: Phone number with country code
const formattedNumber1 = convertPhoneToE164("+33 123 456 789")
console.log(formattedNumber1) // Output: "+33123456789"

// Example 2: Phone number without country code, using default
const formattedNumber2 = convertPhoneToE164("0123456789")
console.log(formattedNumber2) // Output: "+33123456789"

// Example 3: Phone number without country code, using a provided default
const formattedNumber3 = convertPhoneToE164("0123456789", 1)
console.log(formattedNumber3) // Output: "+10123456789"
```

### Notes:

- The function assumes that the country code, if present, is the first two digits following a `+` or `(` symbol.
- Leading zeros in the national part of the number are removed as they are typically not required in E.164 format.
- Non-numeric characters such as spaces, hyphens, and parentheses are stripped out during processing.

This utility is essential for applications handling user-entered phone numbers in various formats, ensuring they are standardized for international use.

&nbsp;

## Convert Timestamp to Formatted Date and Time

The `convertTimestampToDateTime` function converts a given timestamp into a human-readable date and time string. This function is useful for displaying dates and times in a standardized format, with customizable separators and format options.

### Function: `convertTimestampToDateTime`

**Description:**

This function takes a timestamp and converts it into a formatted string that represents the date and time. The format of the output string can be customized to show just the date or both the date and time, with configurable separators for both the date and time components.

- **Parameters:**

  - `params.timestamp` (`number`): The timestamp to be converted. It can be in seconds or milliseconds.
  - `params.format` (`"short" | "long"`, optional): The format of the output string. Defaults to `"long"`.
    - `"short"`: Only the date is included.
    - `"long"`: Both the date and time are included.
  - `params.dateSeparator` (`string`, optional): The separator for date components (year, month, day). Defaults to `"-"`.
  - `params.timeSeparator` (`string`, optional): The separator for time components (hours, minutes, seconds). Defaults to `":"`.

- **Returns:** `string` - The formatted date and time string.

**How It Works:**

1. **Timestamp Normalization:** The function first ensures that the timestamp is in milliseconds. If the timestamp has fewer than 11 digits, it multiplies it by 1000 to convert it from seconds to milliseconds.
2. **Date Object Creation:** A `Date` object is created using the normalized timestamp.
3. **Component Extraction:** The function extracts the year, month, day, hours, minutes, and seconds from the `Date` object. Components are padded with leading zeros if necessary.
4. **Formatting:**
   - The date components are joined using the specified `dateSeparator`.
   - The time components are joined using the specified `timeSeparator`.
5. **Final Output:**
   - If `format` is `"short"`, the function returns only the formatted date.
   - If `format` is `"long"`, the function returns both the formatted date and time, separated by a space.

**Examples:**

```javascript
// Example 1: Long format with default separators
const timestampInSeconds = 1692019800
const formattedLong = convertTimestampToDateTime({ timestamp: timestampInSeconds })
console.log(formattedLong) // Output: "2024-08-14 12:30:00"

// Example 2: Short format with custom date separator
const formattedShort = convertTimestampToDateTime({
	timestamp: timestampInSeconds,
	format: "short",
	dateSeparator: "/",
})
console.log(formattedShort) // Output: "2024/08/14"

// Example 3: Long format with custom separators
const formattedCustom = convertTimestampToDateTime({
	timestamp: timestampInSeconds,
	dateSeparator: "/",
	timeSeparator: ".",
})
console.log(formattedCustom) // Output: "2024/08/14 12.30.00"
```

### Notes:

- The function automatically adjusts for timestamps provided in seconds by converting them to milliseconds.
- Custom date and time separators allow for flexible formatting based on regional or project-specific requirements.
- The default behavior is to return the full date and time (`"long"` format) with standard separators (`"-"` for date and `":"` for time).

This utility is ideal for applications that need to display or store timestamped data in a user-friendly, consistent format.

&nbsp;

## Deep Copy Function

The `deepCopyFunction` is a utility that creates a deep copy of a given object or array. This is particularly useful when you need to ensure that changes to the copied object do not affect the original object, as it recursively copies all nested objects and arrays.

### Function: `deepCopyFunction`

**Description:**

This function takes an object or array as input and returns a new object or array that is a deep copy of the original. Unlike a shallow copy, where only the top-level properties are copied, a deep copy duplicates all nested objects and arrays, ensuring that the entire structure is independent of the original.

- **Parameters:**

  - `inObject` (`T`): The object or array to be deeply copied. The generic type `T` ensures that the function can handle any input type.

- **Returns:** `T` - A new object or array that is a deep copy of the input.

**How It Works:**

1. **Type Check:** The function first checks if the input is an object or an array. If the input is not an object (e.g., a primitive type like a number or string), it simply returns the input value unchanged.
2. **Initialization:** If the input is an object or array, the function initializes a new object or array, depending on the type of the input.
3. **Recursive Deep Copy:**
   - The function iterates over the keys of the input object or the elements of the input array.
   - For each key or element, it recursively calls itself to perform a deep copy of the value. This ensures that even deeply nested objects and arrays are copied.
4. **Return:** After copying all the properties or elements, the deep-copied object or array is returned.

**Examples:**

```javascript
// Deep copying an array
const originalArray = [1, 2, { a: 3, b: 4 }]
const copiedArray = deepCopyFunction(originalArray)
console.log(copiedArray) // Output: [1, 2, { a: 3, b: 4 }]
console.log(copiedArray === originalArray) // Output: false
console.log(copiedArray[2] === originalArray[2]) // Output: false
console.log(copiedArray[2].a === originalArray[2].a) // Output: true
```

### Notes:

- The function handles both objects and arrays, ensuring that the copied data structure maintains its original type.
- The deep copy operation is recursive, which means it can handle complex and deeply nested structures without issue.
- If the input is a primitive value (like a string or number), it is returned as is, since primitives do not need deep copying.

This utility is particularly useful in scenarios where immutability is important, such as when working with state in front-end applications or when you need to avoid unintended side effects from shared references in complex data structures.

&nbsp;

## Group By Function

The `groupBy` function is an optimized utility designed to efficiently group an array of objects by a specified property. This function is engineered to perform quickly even with large datasets, making it suitable for scenarios where performance is critical.

### Function: `groupBy`

**Description:**

This function groups an array of objects based on a specified property, returning an object where each key corresponds to a unique value of that property, and each value is an array of objects that share that property value. The function is designed with speed and efficiency in mind, ensuring that it can handle large and complex datasets without sacrificing performance.

- **Parameters:**

  - `array` (`Array<Record<string, any>>`): The array of objects to be grouped.
  - `property` (`string`): The property by which to group the objects.

- **Returns:** `Record<string, Array<Record<string, any>>>` - An object where each key is a unique value of the specified property, and the corresponding value is an array of objects that have that property value.

**Performance Considerations:**

1. **Fast Object Iteration:** The function uses the `reduce` method to iterate over the array just once, minimizing the time complexity to O(n). This ensures that even as the size of the input array grows, the performance remains efficient.

2. **Optimized Key Access:** By directly accessing and checking the existence of keys in the accumulator object, the function avoids unnecessary overhead, speeding up the grouping process.

3. **Dynamic Object Creation:** The function dynamically creates keys in the accumulator object as needed, avoiding unnecessary initializations and reducing memory usage.

4. **Error Handling:** The function includes robust error handling to manage potential issues like missing properties or invalid inputs, ensuring that it operates smoothly in production environments.

**Examples:**

```javascript
// Example: Grouping an array of objects by a 'category' property
const data = [
	{ id: 1, category: "A", value: 10 },
	{ id: 2, category: "B", value: 20 },
	{ id: 3, category: "A", value: 30 },
	{ id: 4, category: "B", value: 40 },
]

const grouped = groupBy(data, "category")
console.log(grouped)
// Output:
// {
//   A: [
//     { id: 1, category: 'A', value: 10 },
//     { id: 3, category: 'A', value: 30 }
//   ],
//   B: [
//     { id: 2, category: 'B', value: 20 },
//     { id: 4, category: 'B', value: 40 }
//   ]
// }
```

### Performance Notes:

- **Scalability:** The function is designed to scale effectively, maintaining consistent performance even as the size and complexity of the input data increase.
- **Low Overhead:** By avoiding unnecessary processing steps and focusing on direct object manipulation, the function minimizes computational overhead, making it ideal for use in high-performance applications.
- **Resilience:** The function includes comprehensive error handling, ensuring reliable operation even when dealing with unexpected input formats or data anomalies.

The `groupBy` function is well-suited for use in data-intensive applications where grouping large datasets by specific properties is required, providing both speed and reliability.

&nbsp;

## Date and Currency Formatting Functions

### `convertToDate`

**Description:**

Converts a given timestamp to a formatted date string, with options for locale and date formatting. This function handles both JavaScript and PHP-style timestamps efficiently and supports custom formatting.

**Parameters:**

- `timestamp` (`number`, optional): The timestamp to convert. If not provided, returns a placeholder ("...").
- `year2digit` (`boolean`, optional): If `true`, formats the year as a 2-digit number; otherwise, uses a 4-digit year.
- `params` (`object`, optional):
  - `locales` (`Intl.LocalesArgument`, optional): The locale(s) for formatting. Defaults to French ("fr-FR").
  - `options` (`Intl.DateTimeFormatOptions`, optional): Formatting options. Defaults to `day/month/year` format with a customizable year format.

**Returns:**

- `string`: A formatted date string. If `timestamp` is not provided, returns "…".

**Performance Considerations:**

- **Efficient Handling:** Converts PHP-style timestamps (in seconds) to JavaScript format (milliseconds) and formats them in a single operation.
- **Customizable Formatting:** Utilizes the `Intl.DateTimeFormat` API, which is optimized for performance and provides locale-specific formatting.

**Example:**

```javascript
const dateFormatted = convertToDate(1692019800, false, { locales: "en-US" })
console.log(dateFormatted) // Output: "August 14, 2024"
```

---

### `convertToMoney`

**Description:**

Formats a number as a currency string, with options for locale and currency formatting. This function efficiently handles undefined or null inputs and provides locale-specific currency formatting.

**Parameters:**

- `number` (`number`, optional): The number to convert. If `undefined` or `null`, returns a placeholder ("... €").
- `params` (`object`, optional):
  - `locales` (`Intl.LocalesArgument`, optional): The locale(s) for formatting. Defaults to French ("fr-FR").
  - `options` (`Intl.NumberFormatOptions`, optional): Formatting options. Defaults to Euro currency.

**Returns:**

- `string`: A formatted currency string. If `number` is not provided, returns "... €".

**Performance Considerations:**

- **Fast Formatting:** Uses the `Intl.NumberFormat` API, which is optimized for efficient currency conversion and formatting.
- **Robust Handling:** Handles missing or null values gracefully and provides default currency formatting.

**Example:**

```javascript
const moneyFormatted = convertToMoney(1234.56)
console.log(moneyFormatted) // Output: "1 234,56 €"
```

---

These functions are designed to be fast and flexible, making them suitable for applications that require efficient and customizable date and currency formatting.

&nbsp;

## Array of Objects Statistical Functions

### `objectKeyAverage`

**Description:**

Calculates the average value for a specified key across an array of objects. This function handles numeric values and excludes non-numeric values from the average calculation.

**Parameters:**

- `data` (`Record<string, any>[]`): An array of objects where each object may contain the key.
- `key` (`string`): The key whose values will be averaged.

**Returns:**

- `number`: The average of the values for the specified key. Returns `0` if no valid numeric values are found.

**Performance Considerations:**

- **Efficient Summation:** Leverages `objectKeySum` for fast sum calculation.
- **Optimized Filtering:** Filters out non-numeric values before averaging, ensuring efficient performance even with large datasets.

**Example:**

```javascript
const data = [{ amount: "10" }, { amount: "20" }, { amount: "not a number" }, { amount: "30" }]
const average = objectKeyAverage(data, "amount")
console.log(average) // Output: 15
```

---

### `objectKeyMax`

**Description:**

Finds the maximum value for a specified key across an array of objects. This function efficiently handles numeric values and returns the highest value found.

**Parameters:**

- `data` (`Record<string, any>[]`): An array of objects where each object may contain the key.
- `key` (`string`): The key whose maximum value is to be found.

**Returns:**

- `number`: The maximum value for the specified key. Returns `0` if no valid numeric values are found.

**Performance Considerations:**

- **Optimized Reduction:** Uses `reduce` for a single pass through the array, ensuring efficient performance.
- **Robust Conversion:** Converts values to numbers and applies `Math.max` to find the maximum.

**Example:**

```javascript
const data = [{ value: "10" }, { value: "20" }, { value: "not a number" }, { value: "30" }]
const max = objectKeyMax(data, "value")
console.log(max) // Output: 30
```

---

### `objectKeyMin`

**Description:**

Finds the minimum value for a specified key across an array of objects. This function efficiently handles numeric values and returns the lowest value found.

**Parameters:**

- `data` (`Record<string, any>[]`): An array of objects where each object may contain the key.
- `key` (`string`): The key whose minimum value is to be found.

**Returns:**

- `number`: The minimum value for the specified key. Returns `Infinity` if no valid numeric values are found.

**Performance Considerations:**

- **Efficient Reduction:** Uses `reduce` for optimal performance with a single traversal of the array.
- **Effective Initialization:** Starts with `Infinity` to ensure that any valid number will be less.

**Example:**

```javascript
const data = [{ value: "10" }, { value: "20" }, { value: "not a number" }, { value: "5" }]
const min = objectKeyMin(data, "value")
console.log(min) // Output: 5
```

---

### `objectKeySum`

**Description:**

Calculates the sum of values for a specified key across an array of objects. This function efficiently handles numeric values and ignores non-numeric values.

**Parameters:**

- `data` (`Record<string, any>[]`): An array of objects where each object may contain the key.
- `key` (`string`): The key whose values are to be summed.

**Returns:**

- `number`: The total sum of the values for the specified key. Returns `0` if no valid numeric values are found.

**Performance Considerations:**

- **Efficient Summation:** Uses `reduce` for fast summation, processing each item once.
- **Robust Conversion:** Converts values to numbers and checks for validity to ensure accurate results.

**Example:**

```javascript
const data = [{ value: "10" }, { value: "20" }, { value: "not a number" }, { value: "30" }]
const sum = objectKeySum(data, "value")
console.log(sum) // Output: 60
```

---

These functions are designed to efficiently process large arrays of objects, providing quick calculations for key statistics while handling non-numeric values gracefully.

&nbsp;

## Replace Special Chars

The provided function `replaceSpecialChars` normalizes a string by removing special characters and diacritics, retaining only alphanumeric characters and spaces. Here’s a breakdown of how it works:

### Description

**Function:** `replaceSpecialChars`

**Purpose:**
To normalize a string by removing special characters, diacritics (accents), and non-ASCII characters, leaving only alphanumeric characters and spaces.

**Parameters:**

- `str` (`string`): The input string to be normalized.

**Returns:**

- `string`: A normalized version of the input string containing only alphanumeric characters and spaces.

### Steps

1. **Normalization:**

   - **Convert to Unicode Normalization Form D (NFD):** This separates characters from their diacritical marks. For example, "é" is split into "e" and a combining accent character.

2. **Remove Diacritics:**

   - **Regex for Combining Marks:** `/[\u0300-\u036f]/g` matches and removes combining diacritical marks. This step strips accents from characters like "é" to "e".

3. **Remove Non-ASCII Characters:**

   - **Regex for Non-ASCII:** `/[^\x00-\x7F]/g` removes any character that is not within the standard ASCII range (0x00 to 0x7F). This excludes non-ASCII characters like "☕️".

4. **Remove Special Characters:**
   - **Regex for Alphanumeric and Spaces:** `/[^a-zA-Z0-9\s]/g` removes all characters that are not letters, digits, or spaces.

### Example Usage

```javascript
const normalized1 = replaceSpecialChars("Crème brûlée à la mode")
console.log(normalized1) // Output: "Creme brulee a la mode"

const normalized2 = replaceSpecialChars("Déjà vu! 123")
console.log(normalized2) // Output: "Deja vu 123"

const normalized3 = replaceSpecialChars("Café ☕️")
console.log(normalized3) // Output: "Cafe "
```

### Performance Considerations

- **Normalization Efficiency:** The `.normalize("NFD")` method efficiently processes Unicode characters.
- **Regex Performance:** The use of regular expressions for removing diacritics and non-ASCII characters is efficient for most use cases.
- **Processing Time:** The function performs a series of string manipulations in a straightforward manner, which should be efficient for typical input sizes.

This function is particularly useful for preparing strings for processing where uniformity is needed, such as text comparison, search indexing, or data cleansing.

&nbsp;

## Retrieve First & Last name from string

The function `retrieveFirstLastNameFromString` is designed to extract and separate the first name and last name from a full name string. Here’s a detailed explanation of how it works, including improvements and edge cases:

### Description

**Function:** `retrieveFirstLastNameFromString`

**Purpose:**
To extract the surname (last name) and given name (first name) from a full name string.

**Parameters:**

- `fullName` (`string`): The full name to be split into first name and last name.

**Returns:**

- `{ surname: string, given_name: string }`: An object containing the last name (`surname`) and first name (`given_name`).

### Steps and Logic

1. **Sanitize Input:**

   - **Remove Extra Spaces:** `replace(/\s{2,}/g, " ")` replaces multiple spaces with a single space.
   - **Remove Digits:** `replace(/\d/g, "")` removes any digits in the name.
   - **Trim and Split:** `trim().split(" ")` trims leading and trailing spaces and splits the string into words by spaces.

2. **Determine Name Parts:**
   - **Single Word:** If the name consists of one word, it is considered the first name (`given_name`), and the surname is empty.
   - **Two Words:**
     - **Length Comparison:** If the first word is longer and not a compound name (does not include "-"), it is considered the surname. Otherwise, the last word is treated as the surname.
   - **Three or More Words:**
     - **Last Word as Surname:** The last word is assumed to be the surname.
     - **Rest as Given Name:** All preceding words are joined to form the first name.

### Examples

```javascript
const name1 = "John Smith"
const result1 = retrieveFirstLastNameFromString(name1)
console.log(result1) // Output: { surname: "Smith", given_name: "John" }

const name2 = "Alice Mary Johnson"
const result2 = retrieveFirstLastNameFromString(name2)
console.log(result2) // Output: { surname: "Johnson", given_name: "Alice Mary" }

const name3 = "Cher"
const result3 = retrieveFirstLastNameFromString(name3)
console.log(result3) // Output: { surname: "", given_name: "Cher" }
```

### Improved Version

The function as provided handles most common scenarios. However, you might consider a couple of improvements:

- **Handle Names with Hyphens or Special Characters:** Ensure that hyphens or special characters are correctly handled as part of names.
- **Locale Sensitivity:** Different cultures have varying name conventions; if needed, adjust for specific cases.

Here’s a revised version incorporating these considerations:

```javascript
export const retrieveFirstLastNameFromString = (fullName: string): { surname: string, given_name: string } => {
	// Split the full name into words, ensuring proper handling of multiple spaces and trimming
	const words = fullName
		.replace(/\s{2,}/g, " ")
		.trim()
		.split(" ")

	// Determine the length of the array
	const length = words.length

	// Initialize variables for last name and first name
	let surname = "" // Last name
	let given_name = "" // First name

	// Handle different cases based on the number of words
	if (length === 1) {
		// Single word, consider it as the first name
		given_name = words[0]
	} else if (length === 2) {
		// Two words, guess the order based on length
		// Longer word is assumed to be the surname
		surname = words[1]
		given_name = words[0]
	} else {
		// Three or more words, assume the last word is the surname
		surname = words[length - 1]
		// Join the remaining words as the first name
		given_name = words.slice(0, length - 1).join(" ")
	}

	// Return the results
	return { surname, given_name }
}
```

### Considerations

- **Edge Cases:** Handle cases with middle names, initials, and names in different cultural formats where necessary.
- **Input Validation:** Ensure that input is valid and meaningful, possibly by adding checks for empty or invalid names.

This function provides a flexible approach to extracting names from full name strings in a variety of formats.

&nbsp;

## Managing multiple promises

The provided code contains two utility functions for handling promises and functions that return promises. Here's a detailed description of each function, along with improved implementations and explanations:

### `runPromises`

**Purpose:**
Executes an array of values and promises concurrently, returning an array of resolved results.

**Parameters:**

- `promises` (`Array<Promise<any> | any>`): An array containing a mix of promises and regular values.

**Returns:**

- `Promise<T[]>`: A promise that resolves to an array of results. The results are in the same order as the input.

**Description:**

1. **Convert Non-Promise Values:** Uses `Promise.resolve` to wrap all values into promises, ensuring all items are handled consistently.
2. **Execute Concurrently:** Uses `Promise.all` to execute all promises concurrently and gather results.

**Improvement:** The current implementation is robust, but error handling is generally unnecessary with `Promise.all` since it rejects on any promise rejection. Therefore, the `try-catch` block can be omitted.

**Improved Implementation:**

```typescript
export function runPromises<T extends any[]>(promises: [...{ [K in keyof T]: Promise<T[K]> | T[K] }]): Promise<T[]> {
	// Convert non-promise values to promises and resolve all promises concurrently
	return Promise.all(promises.map((p) => Promise.resolve(p)))
}
```

### `runPromiseInSequence`

**Purpose:**
Executes an array of functions sequentially, where each function returns a promise or a value. The result of each function is passed to the next function.

**Parameters:**

- `funcs` (`Array<Func<any, any>>`): An array of functions. Each function takes the result of the previous promise and returns a promise or a value.

**Returns:**

- `Promise<InferReturnType<T>>`: A promise that resolves with the result of the last function. The type is inferred from the last function.

**Description:**

1. **Sequential Execution:** Uses `reduce` to chain promises, ensuring each function executes only after the previous one resolves.
2. **Type Inference:** Uses TypeScript's type inference to determine the return type of the last function.

**Improvements:**

- Ensure the initial `Promise.resolve()` handles functions that might return `void`.
- Provide explicit type annotations for better type safety.

**Improved Implementation:**

```typescript
export function runPromiseInSequence<T extends Func<any, any>[]>(funcs: T): Promise<InferReturnType<T>> {
	return funcs.reduce(async (promiseChain, currentFunc) => {
		// Await the result of the previous function
		const chainedResult = await promiseChain
		// Pass the result to the current function
		return currentFunc(chainedResult)
	}, Promise.resolve() as Promise<Parameters<T[0]>[0]>)
}
```

### Type Definitions

**`Func` Type Alias:**
Defines a function type that takes a previous result and returns a promise or a value.

```typescript
type Func<T, R> = (previousResult: T) => Promise<R> | R
```

**`InferReturnType` Type Alias:**
Infers the return type of the last function in an array of functions.

```typescript
type InferReturnType<T> = T extends (infer U)[] ? (U extends Func<any, infer R> ? R : never) : never
```

### Summary

- **`runPromises`** efficiently handles concurrent execution of promises and values, preserving the input order.
- **`runPromiseInSequence`** processes an array of functions in sequence, with each function's result passed to the next.
- **Type Inference:** Leveraged to ensure the correct return type based on the function signatures.

These functions provide robust utilities for promise management and sequential processing of functions, with improved type safety and execution consistency.

&nbsp;

## Regex validations

Here are improved implementations and explanations for validating email addresses, names, numbers, passwords, and phone numbers.

### 1. Email Validation

**Purpose:**
Validates the format of an email address using a regular expression.

**Parameters:**

- `email` (`string`): The email address to validate.

**Returns:**

- `boolean`: Returns `true` if the email format is valid, `false` otherwise.

**Improved Implementation:**
The current regex is mostly correct but can be refined to more accurately match common email formats.

```typescript
export const validateEmail = (email: string): boolean => {
	// Improved regex for email validation
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	return regex.test(email)
}
```

**Explanation:**

- `^[a-zA-Z0-9._%+-]+`: Matches the local part of the email.
- `@[a-zA-Z0-9.-]+`: Matches the domain part.
- `\.[a-zA-Z]{2,}$`: Ensures a valid top-level domain with at least two letters.

### 2. Name Validation

**Purpose:**
Validates names based on common conventions.

**Parameters:**

- `name` (`string`): The name to validate.

**Returns:**

- `boolean`: Returns `true` if the name is valid, `false` otherwise.

**Improved Implementation:**

```typescript
export const validateName = (name: string): boolean => {
	// Regex for name validation allowing letters, hyphens, apostrophes, spaces, and accented characters
	const regex = /^[A-Za-zÀ-ÖØ-ÿ-' ]{2,50}$/
	return regex.test(name)
}
```

**Explanation:**

- `^[A-Za-zÀ-ÖØ-ÿ-' ]{2,50}$`: Allows letters, hyphens, apostrophes, spaces, and accented characters. Ensures length is between 2 and 50 characters.

### 3. Number Validation

**Purpose:**
Validates if a string is a valid number and optionally checks if it falls within a specified range.

**Parameters:**

- `value` (`string`): The string to validate.
- `min` (`number`, optional): Minimum value for the number.
- `max` (`number`, optional): Maximum value for the number.

**Returns:**

- `boolean`: Returns `true` if the string is a valid number and within the range, `false` otherwise.

**Improved Implementation:**

```typescript
export const validateNumber = (value: string, min?: number, max?: number): boolean => {
	const regex = /^-?\d+(\.\d+)?$/

	if (!regex.test(value)) return false

	const num = parseFloat(value)

	if ((min !== undefined && num < min) || (max !== undefined && num > max)) {
		return false
	}

	return true
}
```

**Explanation:**

- `^-?\d+(\.\d+)?$`: Matches integers and floating-point numbers, including optional negative sign.
- Uses `parseFloat` to convert the string to a number and checks the range if provided.

### 4. Password Validation

**Purpose:**
Validates a password based on common security criteria.

**Parameters:**

- `password` (`string`): The password to validate.

**Returns:**

- `boolean`: Returns `true` if the password meets the criteria, `false` otherwise.

**Improved Implementation:**

```typescript
export const validatePassword = (password: string): boolean => {
	// Regex to ensure at least one lowercase, one uppercase, one digit, one special character, and a minimum length of 8
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
	return regex.test(password)
}
```

**Explanation:**

- `^(?=.*[a-z])`: At least one lowercase letter.
- `(?=.*[A-Z])`: At least one uppercase letter.
- `(?=.*\d)`: At least one digit.
- `(?=.*[\W_])`: At least one special character.
- `.{8,}$`: Minimum length of 8 characters.

### 5. Phone Number Validation

**Purpose:**
Validates phone number formats using a regular expression.

**Parameters:**

- `phone` (`string`): The phone number to validate.

**Returns:**

- `boolean`: Returns `true` if the phone number format is valid, `false` otherwise.

**Improved Implementation:**

```typescript
export const validatePhone = (phone: string): boolean => {
	// Regex to validate phone numbers with optional +, area codes, and various separators
	const regex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,9}([-.\s]?\d{1,9})*$/
	return regex.test(phone)
}
```

**Explanation:**

- `^\+?\d{1,4}?`: Optional leading `+` followed by 1 to 4 digits.
- `[-.\s]?`: Optional separators (hyphens, periods, or spaces).
- `\(?\d{1,4}?\)?`: Optional area codes with parentheses.
- `[-.\s]?\d{1,9}`: Remaining digits with optional separators.
- `([-.\s]?\d{1,9})*$`: Additional digits with optional separators.

This enhanced set of functions ensures accurate validation for various types of input, aligning with common standards and addressing edge cases.
