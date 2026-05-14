import time
import os
import psutil

def test_memory_usage():
    print("Testing Pymatrix Memory Usage...")
    # This assumes pymatrix is installed or in path
    # We will just measure the current process as a baseline
    process = psutil.Process(os.getpid())
    mem_info = process.memory_info()
    print(f"Current Process Memory: {mem_info.rss / 1024 / 1024:.2f} MB")
    print("To test the application specifically, run: 'python3 -m pymatrix.main' in one terminal")
    print("And 'ps aux | grep pymatrix' in another.")

if __name__ == "__main__":
    test_memory_usage()
