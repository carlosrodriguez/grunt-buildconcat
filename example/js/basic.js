var parser = document.createElement('a');
parser.href = "http://example.com:3000/pathname/?search=test#hash";

parser.protocol; // => "http:"
parser.hostname; // => "example.com"
parser.port;     // => "3000"