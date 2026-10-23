// NEO Smart Home — Password Door (prototype)
// Libraries: Keypad, Servo
// Educational model only; not a real security lock.

#include <Keypad.h>
#include <Servo.h>

const byte ROWS = 4;
const byte COLS = 4;
char keys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

byte rowPins[ROWS] = {7, 8, 11, 12};
byte colPins[COLS] = {A0, A1, A2, A3};

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);
Servo doorServo;

const int SERVO_PIN = 10;
const int LOCKED_ANGLE = 0;
const int UNLOCKED_ANGLE = 90;
const char PASSWORD[] = "1234";
char entered[5];
byte indexPos = 0;

void resetEntry() {
  indexPos = 0;
  entered[0] = '\0';
}

void setup() {
  Serial.begin(9600);
  doorServo.attach(SERVO_PIN);
  doorServo.write(LOCKED_ANGLE);
  resetEntry();
  Serial.println("NEO Smart Home: enter 4 digits, then press #.");
}

void loop() {
  char key = keypad.getKey();
  if (!key) return;

  if (key == '*') {
    resetEntry();
    Serial.println("Entry cleared.");
    return;
  }

  if (key == '#') {
    entered[indexPos] = '\0';
    if (strcmp(entered, PASSWORD) == 0) {
      Serial.println("Access granted (prototype).");
      doorServo.write(UNLOCKED_ANGLE);
      delay(3000);
      doorServo.write(LOCKED_ANGLE);
    } else {
      Serial.println("Wrong password.");
    }
    resetEntry();
    return;
  }

  if (key >= '0' && key <= '9' && indexPos < 4) {
    entered[indexPos++] = key;
    Serial.print('*');
  }
}
