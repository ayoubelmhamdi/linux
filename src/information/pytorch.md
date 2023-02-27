# PyTorch
----------
welcome to manual to install `pytorch` in Linux(`Voidlinux`)

# Find Versions
you should get right version for:
- `Nvidia driver`
- `cuda`
- `cuDNN`
- `cuDNN`
- `cuDNN`

## nvidia driver version
simple way is install latest version, and look in `dmsg` to find recommend version of nvidia, for `GeForce 820m` is `nvidia390`

## cuda version
Look here for new (new)[] or [legacy]()

## cuDNN
go to (cuDNN)[https://developer.nvidia.com/rdp/cudnn-archive] website, and search for `cuDNN` version that comatible with you version pf `cuda` that already get already, you can get something like that.

- `Download cuDNN v8.7.0 (November 28th, 2022), for CUDA 11.x`
- `Download cuDNN v7.6.5 (November 5th, 2019), for CUDA 9.0`
if you your `cuda v9.0` you should use `cuDNN v7.6.5`

# install

## install `nvidia390`
```bash
sudo xbps-install -S nvidia390
```
## cuda 10.1

```bash
wget -c https://developer.nvidia.com/compute/cuda/10.1/Prod/local_installers/cuda_10.1.105_418.39_linux.run

sudo sh cuda_10.1.105_418.39_linux.run --silent --toolkit --override --tmpdir=$PWD/dir3
```

TODO:
- [x] fixed gcc12 unssuprted by `--override` flag
- [ ] install `gcc12` by `xbps`

## conda

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
