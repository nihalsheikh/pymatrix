import os
import psutil
import time
import subprocess
import sys

def test_memory():
    print("Testing Rmatrix Memory Usage...")
    # This assumes rmatrix is installed or in path
    try:
        process = subprocess.Popen(['python3', '-m', 'rmatrix.main', '--test'], 
                                   stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        time.sleep(2)
        
        print("To test the application specifically, run: 'python3 -m rmatrix.main' in one terminal")
        print("And 'ps aux | grep rmatrix' in another.")
        
        pid = process.pid
        py = psutil.Process(pid)
        memory_use = py.memory_info()[0] / 2.**20  # memory use in MB
        print(f"Memory usage: {memory_use:.2f} MB")
        
        process.terminate()
    except Exception as e:
        print(f"Error during memory test: {e}")

if __name__ == "__main__":
    test_memory()
