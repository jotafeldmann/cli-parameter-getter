# TODO: improve that test

results=$(node examples/example.js port=1337 app-test | xargs echo | grep '1337 { name: port, value: 1337 } { name: app-test, value: app-test }')

if [ "$results" == "" ]; then
	exit 1
fi

exit 0