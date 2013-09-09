
SRC = $(wildcard lib/*.js) $(wildcard lib/*.css) $(wildcard lib/*.html)

UNAME := $(shell uname)

ifeq ($(UNAME), Linux)
	OPEN=gnome-open
endif
ifeq ($(UNAME), Darwin)
	OPEN=open
endif

build: components $(SRC) component.json
	@(node _ise_/build && touch components)

three-draw-image.js: components
	@component build --standalone three-draw-image --name three-draw-image --out .

components: component.json
	@(component install --dev && touch components)

clean:
	rm -fr build components template.js _ise_/build/backup

component.json: $(SRC)
	@node _ise_/build/auto-update-file-list.js

test: build
	$(OPEN) test/index.html

server:
	node three-draw-image-server.js

demo: build
	$(OPEN) 'http://localhost:3000/examples'

.PHONY: clean three-draw-image.js test server
