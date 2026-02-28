# mycli - SESD Workshop CLI

### Installation

1. **Clone**:
   ```bash
   cd sesd-workshop-2
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Build the Project**:
   ```bash
   npm run build
   ```

4. **Link the CLI globally**:
   ```bash
   npm link
   ```
   *Note: After linking, you can use the `mycli` command from anywhere in your terminal.*

## Available Commands & Usage

### 1. General Commands
- **Greet**: `mycli greet <name>`
  - *Example*: `mycli greet Antigravity`
- **Joke**: `mycli joke`
  - *Example*: Tells a random funny joke.

### 2. Mathematics ("Yeh Le" Series)
- **Add**: `mycli add <a> <b>`
- **Subtract**: `mycli subtract <a> <b>`
- **Multiply**: `mycli multiply <a> <b>`
- **Divide**: `mycli divide <a> <b>`
  - *Note*: Prevents division by zero with a friendly message.

### 3. API-Powered Insights
- **Country**: `mycli country bata`
  - *Example*: Returns a random country name.
- **Weather**: `mycli weather`
  - *Example*: Shows temperature, conditions, and humidity for London.
- **Pokemon**: `mycli pokemon <name>`
  - *Example*: `mycli pokemon pikachu`
- **Movie/TV Info**: `mycli movie <name>`
  - *Example*: `mycli movie "Stranger Things"`

