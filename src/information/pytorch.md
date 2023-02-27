# PyTorch
----------
welcome to the manual for installing the `pytorch` python library in Linux(`Voidlinux`)
we should look [here](https://stackoverflow.com/questions/60987997/why-torch-cuda-is-available-returns-false-even-after-installing-pytorch-with)
To install `pytorch` you should get right version for:
- `Nvidia driver`
- `cuda or cudatoolkit or pytorch-cuda`
- `cuDNN`
- `pytorch`
- `cuDNN`

-----------
## 1. Find Versions

### nvidia driver version
simple way is install the latest version of driver, and look at the output of `dmsg` to find the recommend version of nvidia driver, for me: `GeForce 820m` is `nvidia390`

### cuda version
You must choose a `cuda` version that compatible with your `driver`, and with `Compute Capability`

- [driver] check driver [here](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html#cuda-compatibility)
- [Compute Capability] Look here for [new](https://developer.nvidia.com/cuda-gpus) or (legacy)[https://developer.nvidia.com/cuda-legacy-gpus] to get the `Compute Capability`.

for me:
    - the new cuda version that support my driver `nvidia390` is `CUDA 9.1 (9.1.85)`
    - the `Compute Capability` for `nvidia 820m` is 2.1 `firmi`, that compatible with $v2.1 < cuda < 8.0$

so i will try with `cuda 9.0 and cuda 8.0`

### cuDNN
go to [cuDNN](https://developer.nvidia.com/rdp/cudnn-archive) website, and search for `cuDNN` version that comatible with you version pf `cuda` that already get already, you can get something like that.

- `Download cuDNN v8.7.0 (November 28th, 2022), for CUDA 11.x`
- `Download cuDNN v7.6.5 (November 5th, 2019), for CUDA 9.0`
if you your `cuda v9.0` you should use `cuDNN v7.6.5`

### PyTorch
to get the right version for `pytorch` that conforme with `cudatoolkit` go to [this website](https://pytorch.org/get-started/previous-versions/)
for me i get:
```bash
conda install pytorch==1.1.0 torchvision==0.3.0 cudatoolkit=9.0 -c pytorch
```
## 2. install
---------

### install `nvidia390`
```bash
sudo xbps-install -S nvidia390
```
### cuda 10.1

```bash
wget -c https://developer.nvidia.com/compute/cuda/10.1/Prod/local_installers/cuda_10.1.105_418.39_linux.run

sudo sh cuda_10.1.105_418.39_linux.run --silent --toolkit --override --tmpdir=$PWD/dir3
```

TODO:
- [x] fixed gcc12 unssuprted by `--override` flag
- [ ] install `gcc12` by `xbps`

### conda

Requirement:
- `python3.7.5`
- `pytorch=1.3.1`
- `torchvision=0.4.2`
- `cudatoolkit=9.2.148`
- `cudnn=7.6.3`
```bash
conda create --yes -n env5 python=3.7
conda install \
        pytorch=1.3.1 \
        torchvision=0.4.2 \
        cudatoolkit=9.2.148 \
        cudnn=7.6.3 \
      -c pytorch
```


```bash
conda install \
        pytorch=1.1.0 \
        torchvision=0.3.0 \
        cudatoolkit=9.0 \
        cudnn=7.5 \
      -c pytorch
```
