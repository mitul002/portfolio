with open('src/components/styles/WhatIDo.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix WHAT I DO to be in one line on mobile - update the 900px media query
old_whatido_mobile = '''@media only screen and (max-width: 900px) {
  .whatIDO {
    flex-direction: column;
  }
  .what-box h2 {
    margin: 50px 0;
    font-size: 55px;
    line-height: 53px;
  }'''

new_whatido_mobile = '''@media only screen and (max-width: 900px) {
  .whatIDO {
    flex-direction: column;
  }
  .what-box h2 {
    margin: 50px 0;
    font-size: 42px;
    line-height: 45px;
  }
  .what-box h2 div {
    display: inline;
  }
  .what-box h2 .accent-text {
    display: inline;
    margin-left: 8px;
  }'''

content = content.replace(old_whatido_mobile, new_whatido_mobile)

with open('src/components/styles/WhatIDo.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed WHAT I DO to single line on mobile")
