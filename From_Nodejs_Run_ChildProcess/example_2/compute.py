import time, sys, json

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that and typecast it to int
    return int(json.loads(lines[0]))

def main():
    #get our data as an int from read_in()
    lines = read_in()

    #use ctime to convert timeStamp into date-time format
    readable = time.ctime(lines)

    #return the sum to the output stream
    print(readable)

#start process
if __name__ == '__main__':
    main()